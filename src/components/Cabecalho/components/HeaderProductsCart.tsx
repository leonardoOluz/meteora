import useResize from "@/hooks/useResize";
import { thema } from "@/styles/thema";
import transformNumber from "@/utils/transformNumber";
import { HeaderDivCart, iconsProps, SpanCart } from "../styles";
import Botao from "@/components/Botao";
import { useLocation, useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { RootState } from "@/types/store";
import { useSelector } from "react-redux";
import { isCartVisible } from "@/store/reducers/carrinho";
import { useDispatch } from "react-redux";
import { useState } from "react";
const styleButton = { display: "flex", alignItems: "center", gap: "0.5rem" };
interface IHeaderCartProductsProps {
  cartProducts: "mobile" | "desktop";
}
const HeaderProductsCart = ({
  cartProducts = "desktop",
}: IHeaderCartProductsProps) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(true);
  const carrinho = useSelector((state: RootState) => state.carrinho);
  const width = useResize();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleCartDropDown = () => {
    if (location.pathname === "/carrinho") {
      return dispatch(isCartVisible(false));
    }
    if (isOpenDropDown) {
      if (carrinho.totProduct === 0) {
        return dispatch(isCartVisible(false));
      }
      dispatch(isCartVisible(true));
      return setIsOpenDropDown(false);
    }
    setIsOpenDropDown(true);
  };

  if (cartProducts === "mobile") {
    return (
      <>
        {width < transformNumber(thema.breakpoints.tablet) && (
          <Botao
            classNameBtn="btnUnset"
            style={styleButton}
            aria-label="carrinho"
            title="carrinho"
            onClick={() => navigation("/carrinho")}
          >
            <BsCart4 {...iconsProps} />
            <SpanCart>{carrinho.totProduct}</SpanCart>
          </Botao>
        )}
      </>
    );
  }
  if (cartProducts === "desktop") {
    return (
      <>
        {width >= transformNumber(thema.breakpoints.tablet) && (
          <HeaderDivCart onMouseEnter={() => handleCartDropDown()}>
            <Botao
              classNameBtn="btnUnset"
              style={styleButton}
              aria-label="carrinho"
              title="carrinho"
              onClick={() => navigation("/carrinho")}
            >
              <BsCart4 {...iconsProps} />
              {carrinho.totProduct > 0 && (
                <SpanCart>{carrinho.totProduct}</SpanCart>
              )}
            </Botao>
          </HeaderDivCart>
        )}
      </>
    );
  }
};

export default HeaderProductsCart;
