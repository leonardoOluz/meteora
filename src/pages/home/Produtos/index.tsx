import CardProduto from "@/components/CardProduto";
import Lista from "@/components/LIsta";
import Item from "@/components/LIsta/Item";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { RootState } from "@/types/store";
import { useSelector } from "react-redux";

const Produtos = () => {
  const produtos = useSelector((state: RootState) => state.produtos);

  return (
    <Section classNameSection="secaoProdutos">
      <Typography elementoHtml="h2" classNameTypograph="basicHeadingH3">
        Produtos que estão bombando!
      </Typography>
      <Lista classe="listaProdutos" ariaLabel="Lista de produtos">
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
