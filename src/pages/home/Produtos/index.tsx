import CardProduto from "@/components/CardProduto";
import Lista from "@/components/LIsta";
import Item from "@/components/LIsta/Item";
import Section from "@/components/Section";
import Typography from "@/components/Typography";

const Produtos = () => {
  return (
    <Section classNameSection="secaoProdutos">
      <Typography elementoHtml="h2" classNameTypograph="basicHeadingH3">
        Produtos que estão bombando!
      </Typography>
      <Lista classe="listaProdutos">
        <Item>
          <CardProduto />
        </Item>
        <Item>
          <CardProduto />
        </Item>
        <Item>
          <CardProduto />
        </Item>
        <Item>
          <CardProduto />
        </Item>
        <Item>
          <CardProduto />
        </Item>
        <Item>
          <CardProduto />
        </Item>
      </Lista>
    </Section>
  );
};

export default Produtos;
