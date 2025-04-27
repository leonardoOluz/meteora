import Banner from "@/components/Banner";
import CardCarrinho from "@/components/CardCarrinho";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { DivCart, DivCartBtn, DivCartList, DivCartSumare } from "./styles";
import List from "@/components/List";
import ItemList from "@/components/List/ItemList";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import { selectCartForProduct } from "@/store/selectors/itemSelectors";
import Sumario from "./Sumario";
import useResize from "@/hooks/useResize";
import transformNumber from "@/utils/transformNumber";
import { thema } from "@/styles/thema";
import Botao from "@/components/Botao";
const Carrinho = () => {
  const carrinho = useSelector((state: RootState) => {
    return selectCartForProduct(state);
  });
  const { width } = useResize();

  const tituloCartMain =
    width >= transformNumber(thema.breakpoints.tablet) ? (
      <Typography
        elementoHtml="h2"
        classNameTypograph="basicHeadingH2"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        Carrinho de Compras
      </Typography>
    ) : null;

  return (
    <Section classNameSection="secao-carrinho">
      <Banner typeBanner="bannerCart" />
      {tituloCartMain}
      <DivCart>
        <DivCartList>
          <Typography elementoHtml="h2" classNameTypograph="basicHeadingH3">
            Detalhes da compra
          </Typography>
          <List classeLista="listaCarrinho" ariaLabel="lista de carrinhos">
            {carrinho.map((card) => (
              <ItemList key={card.id}>
                <CardCarrinho card={card} />
              </ItemList>
            ))}
          </List>
        </DivCartList>
        <DivCartSumare>
          <Sumario />
          <DivCartBtn>
            <Botao classNameBtn="btnQuarciario" tipo="button">
              Continuar compra
            </Botao>
            <Botao classNameBtn="btnSecundary" tipo="button">
              Finalizar compra
            </Botao>
          </DivCartBtn>
        </DivCartSumare>
      </DivCart>
    </Section>
  );
};

export default Carrinho;
