import { IDetails } from "@/types/store";
import { DivModalContent, ModalSelectedDetailsStyle } from "./styles";
import List from "@/components/List";
import ItemList from "@/components/List/ItemList";
import Form from "@/components/Form";
import Typography from "@/components/Typography";
import { IoIosCloseCircle } from "react-icons/io";
import Botao from "@/components/Botao";
import { useDispatch } from "react-redux";
import { updateProduct } from "@/store/reducers/carrinho";
import { ICardProduto } from "@/types/componentTypes";
import { useRef } from "react";
import useEventMouse from "@/hooks/useEventMouse";
import useEventFocusKeydown from "@/hooks/useEventFocusKeydown";
import useCheckPrice from "@/hooks/useCheckPrice";
import useSelectCatPromocao from "@/hooks/useSelectCatPromocao";

interface DialogProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
  details: IDetails[];
  handleClose: () => void;
  setModalDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  card: ICardProduto;
  isModalDetailsOpen: boolean;
}

const ModalSelectedDetails = ({
  details,
  handleClose,
  setModalDetailsOpen,
  card,
  isModalDetailsOpen,
  ...rest
}: DialogProps) => {
  const dispatch = useDispatch();
  const formRef = useRef<HTMLFormElement>(null);
  const dialogModalRef = useRef<HTMLDialogElement>(null);
  const checkPromocao = useSelectCatPromocao();
  const price = useCheckPrice(card.preco, checkPromocao(card.id));

  useEventMouse({
    isBoolean: isModalDetailsOpen,
    setIsBoolean: setModalDetailsOpen,
    isRef: formRef,
    eventType: "mousedown",
  });
  useEventFocusKeydown({
    dialogModalRef,
    isOpen: isModalDetailsOpen,
    handleClose,
  });
  const handleClick = (details: IDetails) => {
    dispatch(
      updateProduct({
        id: card.id,
        details,
        price,
      })
    );
    handleClose();
  };

  return (
    <ModalSelectedDetailsStyle ref={dialogModalRef} {...rest}>
      <Form
        ariaLabel="Formulario de detalhes"
        handleSubmit={() => {}}
        classForm="selectedModal"
        ref={formRef}
      >
        <Typography
          elementoHtml="h2"
          classNameTypograph="basicHendingH4"
          isColor="#000"
        >
          Selecione o item para excluir
        </Typography>
        <Botao
          classNameBtn="btnUnset"
          className="btnClose"
          onClick={handleClose}
        >
          <IoIosCloseCircle size={25} />
        </Botao>
        <List aria-label="Lista de detalhes" classeLista="listSelectedModal">
          {details.map((detail) => (
            <ItemList
              key={detail.id}
              onClick={() => handleClick(detail)}
              tabIndex={0}
            >
              <DivModalContent>
                <h3>Cor: </h3>
                <span>{detail.cor}</span>
              </DivModalContent>
              <DivModalContent>
                <h3>Tamanho: </h3>
                <span>{detail.tamanho}</span>
              </DivModalContent>
            </ItemList>
          ))}
        </List>
      </Form>
    </ModalSelectedDetailsStyle>
  );
};

export default ModalSelectedDetails;
