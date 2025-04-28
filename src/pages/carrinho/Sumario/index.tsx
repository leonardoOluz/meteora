import Typography from "@/components/Typography";
import { AnsideSumare, DlSumare } from "./styles";
import { ICartSlice } from "@/types/store";

interface IProps {
  cart: ICartSlice;
}
const Sumario = ({ cart }: IProps) => {
  const frete = 10.0;

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
        <dt>Frete</dt>
        <dd>R$ {frete.toFixed(2)}</dd>
        <dt className="total">Total:</dt>
        <dd className="total">R$ {(cart.totValue + frete).toFixed(2)}</dd>
      </DlSumare>
    </AnsideSumare>
  );
};

export default Sumario;
