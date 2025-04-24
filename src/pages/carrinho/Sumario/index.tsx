import Typography from "@/components/Typography";
import { AnsideSumare, DlSumare } from "./styles";

const Sumario = () => {
  return (
    <AnsideSumare>
      <Typography elementoHtml="h4" classNameTypograph="basicHendingH4">
        Sumário
      </Typography>
      <DlSumare>
        <dt>03 Produtos</dt>
        <dd>R$ 10,00</dd>
        <dt>Frete</dt>
        <dd>R$ 10,00</dd>
        <dt className="total">Total:</dt>
        <dd className="total">R$ 1020,00</dd>
      </DlSumare>
    </AnsideSumare>
  );
};

export default Sumario;
