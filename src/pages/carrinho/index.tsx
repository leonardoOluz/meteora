import Banner from "@/components/Banner";
import CardCarrinho from "@/components/CardCarrinho";
import Lista from "@components/Lista";
import Item from "@components/Lista/Item";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import cardProdutos from "@/json/produtos.json";
import { DivListaCarrinho } from "./styles";
const Carrinho = () => {
  return (
    <Section classNameSection="secao-carrinho">
      <Banner typeBanner="bannerCart" />
      <DivListaCarrinho>
        <Typography elementoHtml="h2" classNameTypograph="basicHeadingH3">
          Detalhes da compra
        </Typography>
        <Lista classeLista="listaCarrinho" ariaLabel="lista de carrinhos">
          {cardProdutos.produtos.map((card) => (
            <Item key={card.id}>
              <CardCarrinho {...card} />
            </Item>
          ))}
        </Lista>
      </DivListaCarrinho>
    </Section>
  );
};

export default Carrinho;
