import Banner from "@/components/Banner";
import CardCarrinho from "@/components/CardCarrinho";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import cardProdutos from "@/json/produtos.json";
import { DivListaCarrinho } from "./styles";
import List from "@/components/List";
import ItemList from "@/components/List/Item";
const Carrinho = () => {
  return (
    <Section classNameSection="secao-carrinho">
      <Banner typeBanner="bannerCart" />
      <DivListaCarrinho>
        <Typography elementoHtml="h2" classNameTypograph="basicHeadingH3">
          Detalhes da compra
        </Typography>
        <List classeLista="listaCarrinho" ariaLabel="lista de carrinhos">
          {cardProdutos.produtos.map((card) => (
            <ItemList key={card.id}>
              <CardCarrinho {...card} />
            </ItemList>
          ))}
        </List>
      </DivListaCarrinho>
    </Section>
  );
};

export default Carrinho;
