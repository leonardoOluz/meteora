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
import transformNumber from "@/utils/transformNumber";
import { thema } from "@/styles/thema";
import Botao from "@/components/Botao";
import useResize from "@/hooks/useResize";

const Carrinho = () => {
  const cartProduct = useSelector((state: RootState) => {
    return selectCartForProduct(state);
  });

  const cart = useSelector((state: RootState) => state.carrinho);

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
    <Section classNameSection="secao carrinho">
      <Banner typeBanner="bannerCart" />
      {tituloCartMain}
      <DivCart>
        <DivCartList>
          <Typography elementoHtml="h2" classNameTypograph="basicHeadingH3">
            Detalhes da compra
          </Typography>
          <List classeLista="listaCarrinho" aria-Label="lista de carrinhos">
            {cartProduct.map((itemProduct) => (
              <ItemList key={itemProduct.id}>
                <CardCarrinho
                  card={itemProduct}
                  totQuanty={
                    cart.data.find((itemCart) => itemCart.id === itemProduct.id)
                      ?.quantity || 0
                  }
                />
              </ItemList>
            ))}
          </List>
        </DivCartList>
        <DivCartSumare>
          <Sumario cart={cart} />
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
