import Typography from "@/components/Typography";
import { AnsideSumare, DlSumare } from "./styles";
import { ICartSlice, RootState } from "@/types/store";
import { useSelector } from "react-redux";

interface IProps {
  cart: ICartSlice;
}
const Sumario = ({ cart }: IProps) => {
  const { isFrete, price } = useSelector((state: RootState) => state.frete);
  return (
    <AnsideSumare>
      <Typography elementoHtml="h4" classNameTypograph="basicHendingH4">
        Sumário
      </Typography>
      <DlSumare>
        <dt>
          {cart.totProduct <= 1
            ? `${cart.totProduct} Produto`
            : `${cart.totProduct} Produtos`}
        </dt>
        <dd>R$ {cart.totValue.toFixed(2)}</dd>
        {isFrete && (
          <>
            <dt>Frete</dt>
            <dd>{`R$ ${price.toFixed(2)}`}</dd>
          </>
        )}
        <dt className="total">Total:</dt>
        <dd className="total">R$ {(isFrete ? cart.totValue + price : cart.totValue).toFixed(2)}</dd>
      </DlSumare>
    </AnsideSumare>
  );
};

export default Sumario;
