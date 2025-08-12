import {
  DialogModal,
  DivModal,
  DivProdutoModal,
  ContainerModal,
} from "./styles";
import Photo from "../Photo";
import { ProductCard } from "@/types/componentTypes";
import useSetImagens from "@/hooks/useSetImagens";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "@/store/reducers/carrinho";
import useEventMouse from "@/hooks/useEventMouse";
import { v4 as uuidv4 } from "uuid";
import useEventFocusKeydown from "@/hooks/useEventFocusKeydown";
import ModalProductHeader from "./components/ModalProductHeader";
import ModalProductDescription from "./components/ModalProductDescription";
import ModalProductForm from "./components/ModalProductForm";
import useCheckPrice from "@/hooks/useCheckPrice";
import useSelectCatPromocao from "@/hooks/useSelectCatPromocao";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import { checkShipping } from "@/store/reducers/frete";
import { AppDispatch } from "@/store";

interface IProps {
  handleClose: () => void;
  isSetOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  card: ProductCard;
}

const ModalProduto = ({ handleClose, isOpen, card, isSetOpen }: IProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const dialogModalRef = useRef<HTMLDialogElement>(null);
  const [isColor, setIsColor] = useState<string>("");
  const [isSize, setIsSize] = useState<string>("");
  const { imagensCardProdutos } = useSetImagens();
  const dispatch = useDispatch<AppDispatch>();
  const checkPromocao = useSelectCatPromocao();
  const price = useCheckPrice(card.preco, checkPromocao(card.id));
  const { isFrete } = useSelector((state: RootState) => state.frete);
  const { totProduct } = useSelector((state: RootState) => state.carrinho);
  useEventMouse({
    isBoolean: isOpen,
    setIsBoolean: isSetOpen,
    isRef: divRef,
    eventType: "mousedown",
  });
  useEventFocusKeydown({ dialogModalRef, isOpen, handleClose });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      addProduct({
        id: card.id,
        details: {
          id: uuidv4(),
          cor: isColor,
          tamanho: isSize,
        },
        price,
      })
    );
    if (isFrete) {
      dispatch(checkShipping(totProduct + 1));
    }
    handleClose();
  };

  return (
    <DialogModal open={isOpen} tabIndex={0} ref={dialogModalRef}>
      <DivModal ref={divRef}>
        <ModalProductHeader handleClose={handleClose} />
        <DivProdutoModal>
          <Photo
            src={imagensCardProdutos(card.imagem)}
            alt={card.alt}
            classeImg="imgProdutoCard"
          />
          <ContainerModal>
            <ModalProductDescription
              descricao={card.descricao}
              preco={card.preco}
              titulo={card.titulo}
              valueCatPromo={checkPromocao(card.id)}
            />
            <ModalProductForm
              colors={card.cor}
              sizes={card.tamanho}
              handleSubmit={handleSubmit}
              isColor={isColor}
              isSize={isSize}
              setIsColor={setIsColor}
              setIsSize={setIsSize}
            />
          </ContainerModal>
        </DivProdutoModal>
      </DivModal>
    </DialogModal>
  );
};

export default ModalProduto;
