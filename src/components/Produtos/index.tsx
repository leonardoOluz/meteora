import CardProduto from "@/components/CardProduto";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { thema } from "@/styles/thema";
import { RootState } from "@/types/store";
import { useSelector } from "react-redux";
import Lista from "../Lista";
import Item from "../Lista/Item";

const Produtos = () => {
  const produtos = useSelector((state: RootState) => state.produtos);

  return (
    <Section classNameSection="secao-produtos">
      <Typography
        elementoHtml="h2"
        classNameTypograph="basicHeadingH3"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        Produtos que estão bombando!
      </Typography>
      <Lista classeLista="listaProdutos" ariaLabel="Lista de produtos">
        {produtos.map((card) => (
          <Item key={card.id} aria-label={`card de produto ${card.categoria}`}>
            <CardProduto card={card} />
          </Item>
        ))}
      </Lista>
    </Section>
  );
};

export default Produtos;
