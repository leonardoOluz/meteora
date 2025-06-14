import Typography from "@/components/Typography";
import Botao from "@/components/Botao";
import { thema } from "@/styles/thema";
import {
  DivCartDropDownSumare,
  DivSumareValue,
  PriceSpanCartDropDown,
} from "./styles";
import { useNavigate } from "react-router-dom";

interface ICartDropDownSumareProps {
  totValue: number;
  handleDropDown: () => void;
}

const CartDropDownSumare = ({totValue, handleDropDown}: ICartDropDownSumareProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    handleDropDown();
    navigate("/checkout/address");
  }
  return (
    <DivCartDropDownSumare>
      <DivSumareValue>
        <Typography
          elementoHtml="h4"
          classNameTypograph="basicHendingH4"
          isColor={thema.colorsPrimary.verde}
        >
          Total:
        </Typography>
        <PriceSpanCartDropDown>
          R$ {totValue.toFixed(2)}
        </PriceSpanCartDropDown>
      </DivSumareValue>
      <Botao
        classNameBtn="btnSecundary"
        type="button"
        onClick={handleClick}
      >
        Finalizar compra
      </Botao>
    </DivCartDropDownSumare>
  );
};

export default CartDropDownSumare;
