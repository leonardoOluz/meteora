import CardProduto from "@/components/CardProduto";
import Lista from "@/components/LIsta";
import Item from "@/components/LIsta/Item";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import produtos from "@/json/produtos.json";
const Produtos = () => {
  return (
    <Section classNameSection="secaoProdutos">
      <Typography elementoHtml="h2" classNameTypograph="basicHeadingH3">
        Produtos que estão bombando!
      </Typography>
      <Lista classe="listaProdutos" ariaLabel="Lista de produtos">
        {produtos.produtos.map((card) => (
          <Item key={card.id} aria-label={`card de produto ${card.categoria}`}>
            <CardProduto {...card}/>
          </Item>
        ))}
      </Lista>
    </Section>
  );
};

export default Produtos;
