import { useState } from "react";
import Botao from "../Botao";
import { DivBtnsSelected, DivSelectedQuantity } from "./styles";
import Typography from "../Typography";
import ModalProduto from "../ModalProduto";
import { ICardProduto } from "@/types/componentTypes";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import { selectDetailsTheCartForProduct } from "@/store/selectors/itemSelectors";
import ModalSelectedDetails from "./ModalSelectedDetails";
interface IProps {
  isDropDown?: boolean;
  totProduct?: number;
  card: ICardProduto;
  valueCatPromo?: number;
}
const SelectedQuantity = ({
  isDropDown,
  totProduct,
  card,
  valueCatPromo,
}: IProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDetailsOpen, setModalDetailsOpen] = useState(false);

  const details = useSelector((state: RootState) =>
    selectDetailsTheCartForProduct(state, card.id)
  );

  const modalDetailsDelete =
    modalDetailsOpen && details?.details ? (
      <ModalSelectedDetails
        details={details?.details}
        open={modalDetailsOpen}
        isModalDetailsOpen={modalDetailsOpen}
        setModalDetailsOpen={setModalDetailsOpen}
        handleClose={() => setModalDetailsOpen(false)}
        card={card}
        valueCatPromo={valueCatPromo}
      />
    ) : null;

  const modalAddProduct = modalOpen ? (
    <ModalProduto
      card={card}
      handleClose={() => setModalOpen(false)}
      isOpen={modalOpen}
      isSetOpen={setModalOpen}
      valueCatPromo={valueCatPromo}
    />
  ) : null;

  return (
    <DivSelectedQuantity $flexDirection={isDropDown ? "row" : "column"}>
      <Typography elementoHtml="p" classNameTypograph="basicParagraphBold">
        Quantidade:{" "}
      </Typography>

      {modalDetailsDelete}
      <DivBtnsSelected>
        <Botao
          classNameBtn="btnTerciario"
          handleClick={() => setModalDetailsOpen(!modalDetailsOpen)}
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
      {modalAddProduct}
    </DivSelectedQuantity>
  );
};

export default SelectedQuantity;
