import Header from "../Header";
import Typography from "../Typography";
import {
  DialogModal,
  DivHeaderModal,
  DivModal,
  DivDescricaoProduto,
  DivProdutoModal,
  FieldsetStyle,
  DivPrecoProdutod,
  SpanPreco,
  LegendStyle,
  DivRadio,
  ContainerModal,
} from "./styles";
import { FaRegCheckCircle } from "react-icons/fa";
import { thema } from "@/styles/thema";
import Botao from "../Botao";
import { IoIosClose } from "react-icons/io";
import Form from "../Form";
import Photo from "../Photo";
import RadioSelect from "../RadioSelect";
import { ICardProduto } from "@/types/componentTypes";
import useSetImagens from "@/hooks/useSetImagens";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "@/store/reducers/carrinho";
import useEventMouse from "@/hooks/useEventMouse";
import { v4 as uuidv4 } from "uuid";
import useEventFocusKeydown from "@/hooks/useEventFocusKeydown";

interface IProps {
  handleClose: () => void;
  isSetOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  card: ICardProduto;
}

const ModalProduto = ({ handleClose, isOpen, card, isSetOpen }: IProps) => {
  const [cor, setCor] = useState<string>("");
  const [tamanho, setTamanho] = useState("");
  const divRef = useRef<HTMLDivElement>(null);
  const dialogModalRef = useRef<HTMLDialogElement>(null);
  const { imagensCardProdutos } = useSetImagens();
  const dispatch = useDispatch();

  useEventMouse({
    isBoolean: isOpen,
    setIsBoolean: isSetOpen,
    isRef: divRef,
    eventType: "mousedown",
  });
  useEventFocusKeydown({ dialogModalRef, isOpen, handleClose });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Produto adicionado ao carrinho");
    dispatch(
      addProduct({
        id: card.id,
        details: {
          id: uuidv4(),
          cor,
          tamanho,
        },
        price: card.preco,
      })
    );
    handleClose();
  };

  return (
    <DialogModal open={isOpen} tabIndex={0} ref={dialogModalRef}>
      <DivModal ref={divRef}>
        <Header classeHeader="headerModal">
          <DivHeaderModal>
            <FaRegCheckCircle color={thema.colorsPrimary.verde} size={32} />
            <Typography elementoHtml="h2" classNameTypograph="typographyModal">
              Confira detalhes sobre o produto
            </Typography>
          </DivHeaderModal>
          <Botao
            aria-label="Fechar modal"
            classNameBtn="btnUnset"
            tipo="button"
            handleClick={handleClose}
            tabIndex={0}
          >
            <IoIosClose color="#6C757D" size={32} />
          </Botao>
        </Header>
        <DivProdutoModal>
          <Photo
            photo={imagensCardProdutos(card.imagem)}
            alt={card.alt}
            classeImg="imgProdutoCard"
          />
          <ContainerModal>
            <DivDescricaoProduto>
              <Typography
                elementoHtml="h2"
                classNameTypograph="basicParagraphBold"
                isColor={thema.colorsPrimary.cinzaChumbo}
              >
                {card.titulo}
              </Typography>
              <Typography
                classNameTypograph="basicParagraphSmall"
                elementoHtml="p"
                isColor={thema.colorsPrimary.cinzaChumbo}
              >
                {card.descricao}
              </Typography>
              <DivPrecoProdutod>
                <SpanPreco>R$ {card.preco.toFixed(2)}</SpanPreco>
                <Typography
                  elementoHtml="p"
                  classNameTypograph="basicParagraphSmall"
                  isColor={thema.inputState.offState.default}
                >
                  Vendido e entregue por Riachuelo
                </Typography>
              </DivPrecoProdutod>
            </DivDescricaoProduto>
            <Form ariaLabel="itens opcionais" handleSubmit={handleSubmit}>
              <FieldsetStyle>
                <LegendStyle aria-label="cores">Cores:</LegendStyle>
                <DivRadio>
                  {card.cor.map((itemCor) => (
                    <RadioSelect
                      key={itemCor}
                      nome="cor"
                      texto={itemCor}
                      handleChange={(e) => {
                        setCor(e.target.value);
                      }}
                      isChecked={itemCor === cor}
                    />
                  ))}
                </DivRadio>
              </FieldsetStyle>
              <FieldsetStyle>
                <LegendStyle aria-label="tamanhos">Tamanho:</LegendStyle>
                <DivRadio>
                  {card.tamanho.map((itemTamanho) => (
                    <RadioSelect
                      key={itemTamanho}
                      nome="tamanho"
                      texto={itemTamanho}
                      handleChange={(e) => {
                        setTamanho(e.target.value);
                      }}
                      isChecked={itemTamanho === tamanho}
                    />
                  ))}
                </DivRadio>
              </FieldsetStyle>
              <Botao classNameBtn="btnSecundary" tipo="submit">
                Adicionar à sacola
              </Botao>
            </Form>
          </ContainerModal>
        </DivProdutoModal>
      </DivModal>
    </DialogModal>
  );
};

export default ModalProduto;
