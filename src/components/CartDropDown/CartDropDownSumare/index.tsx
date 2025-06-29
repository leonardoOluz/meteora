import Typography from "@/components/Typography";
import Botao from "@/components/Botao";
import { thema } from "@/styles/thema";
import {
  DivCartDropDownSumare,
  DivSumareValue,
  PriceSpanCartDropDown,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";

interface ICartDropDownSumareProps {
  totValue: number;
  handleDropDown: () => void;
}

const CartDropDownSumare = ({
  totValue,
  handleDropDown,
}: ICartDropDownSumareProps) => {
  const navigate = useNavigate();
  const { isFrete, price } = useSelector((state: RootState) => state.frete);
  const handleClick = () => {
    handleDropDown();
    navigate("/checkout/address");
  };

  const frete = isFrete ? (
    <DivSumareValue>
      <Typography
        elementoHtml="h4"
        classNameTypograph="basicHendingH4"
        isColor={thema.colorsPrimary.verde}
      >
        Frete:
      </Typography>
      <PriceSpanCartDropDown>R$ {price.toFixed(2)}</PriceSpanCartDropDown>
    </DivSumareValue>
  ) : null;

  return (
    <DivCartDropDownSumare>
      {frete}
      <DivSumareValue>
        <Typography
          elementoHtml="h4"
          classNameTypograph="basicHendingH4"
          isColor={thema.colorsPrimary.verde}
        >
          Total:
        </Typography>
        <PriceSpanCartDropDown>
          R$ {(isFrete ? totValue + price : totValue).toFixed(2)}
        </PriceSpanCartDropDown>
      </DivSumareValue>
      <Botao classNameBtn="btnSecundary" type="button" onClick={handleClick}>
        Finalizar compra
      </Botao>
    </DivCartDropDownSumare>
  );
};

export default CartDropDownSumare;
