import Banner from "@/components/Banner";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { DivCart, DivCartBtn, DivCartList, DivCartSumare } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import { selectProductCart } from "@/store/selectors/itemSelectors";
import Sumario from "./Sumario";
import transformNumber from "@/utils/transformNumber";
import { thema } from "@/styles/thema";
import Botao from "@/components/Botao";
import useResize from "@/hooks/useResize";
import { useNavigate } from "react-router-dom";
import ListCart from "./ListCart";
import CartIsEmpty from "@/components/CartIsEmpty";

const Carrinho = () => {
  const width = useResize();
  const navigation = useNavigate();
  const cart = useSelector((state: RootState) => state.carrinho);
  const cartProduct = useSelector((state: RootState) => {
    return selectProductCart(state);
  });

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
      {cart.totProduct === 0 ? (
        <CartIsEmpty emptyType="cart"/>
      ) : (
        <>
          <Banner typeBanner="bannerCart" />
          {tituloCartMain}
          <DivCart>
            <DivCartList>
              <Typography elementoHtml="h2" classNameTypograph="basicHeadingH3">
                Detalhes da compra
              </Typography>
              <ListCart cart={cart} cartProduct={cartProduct} />
            </DivCartList>
            <DivCartSumare>
              <Sumario cart={cart} />
              <DivCartBtn>
                <Botao
                  title="Continuar comprando"
                  classNameBtn="btnQuarciario"
                  type="button"
                  onClick={() => navigation("/")}
                >
                  Continuar compra
                </Botao>
                <Botao
                  title="Finalizar compra"
                  classNameBtn="btnSecundary"
                  type="button"
                  onClick={() => navigation("/checkout/address")}
                >
                  Finalizar compra
                </Botao>
              </DivCartBtn>
            </DivCartSumare>
          </DivCart>
        </>
      )}
    </Section>
  );
};

export default Carrinho;
