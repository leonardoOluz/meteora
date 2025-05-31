import useResize from "@/hooks/useResize";
import { thema } from "@/styles/thema";
import transformNumber from "@/utils/transformNumber";
import { ContainerCart, iconsProps } from "../styles";
import Botao from "@/components/Botao";
import { Link, useLocation } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { RootState } from "@/types/store";
import { useSelector } from "react-redux";
import { isCartDropDown } from "@/store/reducers/carrinho";
import { useDispatch } from "react-redux";
import { useState } from "react";
const CartProductsDesktop = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(true);
  const carrinho = useSelector((state: RootState) => state.carrinho);
  const { width } = useResize();
  const location = useLocation();
  const dispatch = useDispatch();
  
  const handleCartDropDown = () => {
    if (location.pathname === "/carrinho") {
      console.log("handleCartDropDown - carrinho", isOpenDropDown);
      return dispatch(isCartDropDown(false));
    }
    if (isOpenDropDown) {
      console.log("handleCartDropDown - isOpenDropDown", isOpenDropDown);
      dispatch(isCartDropDown(true));
      return setIsOpenDropDown(false);
      // return setTimeout(() => {
        // }, 500);F
      }
      console.log("handleCartDropDown", isOpenDropDown);
    setIsOpenDropDown(true);
  };

  return (
    <>
      {width >= transformNumber(thema.breakpoints.tablet) && (
        <ContainerCart onMouseEnter={() => handleCartDropDown()}>
          <Botao classNameBtn="btnUnset" aria-label="carrinho" title="carrinho">
            <Link to="carrinho">
              <BsCart4 {...iconsProps} />
              <span>{carrinho.totProduct}</span>
            </Link>
          </Botao>
        </ContainerCart>
      )}
    </>
  );
};

export default CartProductsDesktop;
