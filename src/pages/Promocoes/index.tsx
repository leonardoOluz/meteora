import CardProduto from "@/components/CardProduto";
import List from "@/components/List";
import ItemList from "@/components/List/ItemList";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { thema } from "@/styles/thema";
import cardProdutos from "@/json/produtos.json";
import DivCatPromo from "./DivCatPromo";

const Promocoes = () => {
  
  return (
    <Section classNameSection="secao-promocoes">
      <Typography
        elementoHtml="h2"
        classNameTypograph="basicHeadingH3"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        Confira nossas promoções
      </Typography>
      <DivCatPromo value={0.5} isColor={thema.colorsPrimary.laranja}>
        <List classeLista="listPromocoes" ariaLabel="Lista de promocoes">
          <ItemList>
            <CardProduto card={cardProdutos.produtos[0]} valueCatPromo={0.5}/>
          </ItemList>
          <ItemList>
            <CardProduto card={cardProdutos.produtos[1]} valueCatPromo={0.5}/>
          </ItemList>
          <ItemList>
            <CardProduto card={cardProdutos.produtos[2]} valueCatPromo={0.5}/>
          </ItemList>
          <ItemList>
            <CardProduto card={cardProdutos.produtos[2]} valueCatPromo={0.5}/>
          </ItemList>
        </List>
      </DivCatPromo>
      <DivCatPromo value={0.3} isColor={thema.colorsPrimary.coral}>
        <List classeLista="listPromocoes" ariaLabel="Lista de promocoes">
          <ItemList>
            <CardProduto card={cardProdutos.produtos[0]} />
          </ItemList>
          <ItemList>
            <CardProduto card={cardProdutos.produtos[1]} />
          </ItemList>
          <ItemList>
            <CardProduto card={cardProdutos.produtos[2]} />
          </ItemList>
          <ItemList>
            <CardProduto card={cardProdutos.produtos[2]} />
          </ItemList>
        </List>
      </DivCatPromo>
    </Section>
  );
};

export default Promocoes;
