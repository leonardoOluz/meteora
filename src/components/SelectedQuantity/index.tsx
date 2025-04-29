import { useState } from "react";
import Botao from "../Botao";
import { DivBtnsSelected, DivSelectedQuantity } from "./styles";
import Typography from "../Typography";
import ModalProduto from "../ModalProduto";
import { ICardProduto } from "@/types/componentTypes";
interface IProps {
  isDropDown?: boolean;
  totProduct?: number;
  card: ICardProduto;
}
const SelectedQuantity = ({ isDropDown, totProduct, card }: IProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <DivSelectedQuantity $flexDirection={isDropDown ? "row" : "column"}>
      <Typography elementoHtml="p" classNameTypograph="basicParagraphBold">
        Quantidade:{" "}
      </Typography>

      <DivBtnsSelected>
        <Botao
          classNameBtn="btnTerciario"
          handleClick={() => {}}
        >
          -
        </Botao>
        <span className="quantity">{totProduct}</span>
        <Botao
          classNameBtn="btnTerciario"
          handleClick={() => {
            setModalOpen(true);
          }}
        >
          +
        </Botao>
      </DivBtnsSelected>

      {modalOpen ? (
        <ModalProduto
          card={card}
          handleClose={() => setModalOpen(false)}
          isOpen={modalOpen}
        />
      ) : (
        <></>
      )}

    </DivSelectedQuantity>
  );
};

export default SelectedQuantity;
