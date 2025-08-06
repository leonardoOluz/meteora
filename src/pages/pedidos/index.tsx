import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { thema } from "@/styles/thema";
import PedidosList from "./PedidosList";
const Pedidos = () => {
  
  return (
    <Section classNameSection="secao carrinho">
      <Typography
        classNameTypograph="basicHeadingH2"
        elementoHtml="h2"
        isColor={thema.colorsPrimary.cinzaChumbo}
        style={{ margin: "2rem" }}
      >
        Meus Pedidos
      </Typography>
      <PedidosList />
    </Section>
  );
};

export default Pedidos;
