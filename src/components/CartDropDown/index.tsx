import btnClose from "./assets/close-button.svg";
import Botao from "../Botao";
import CartDropDownList from "./CartDropDownList";
import CartDropDownSumare from "./CartDropDownSumare";
import Header from "../Header";
import Typography from "../Typography";
import useEventMouse from "@/hooks/useEventMouse";
import { DivCartDropDown } from "./styles";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import { selectProductCart } from "@/store/selectors/itemSelectors";
import { useDispatch } from "react-redux";
import { isCartDropDown } from "@/store/reducers/carrinho";

const CartDropDown = () => {
  const cartDropDownRef = useRef<HTMLDivElement>(null);
  const cart = useSelector((state: RootState) => state.carrinho);
  const dispatch = useDispatch();
  const productsCart = useSelector((state: RootState) => {
    return selectProductCart(state);
  });

  useEventMouse({
    isBoolean: cart.isCartDropDown,
    setIsBoolean: (value: boolean) => dispatch(isCartDropDown(value)),
    isRef: cartDropDownRef,
    eventType: "mousedown",
  });

  if (productsCart.length > 0) {
    return (
      <DivCartDropDown ref={cartDropDownRef}>
        <Header classeHeader="headerDropDown">
          <Typography elementoHtml="h2" classNameTypograph="basicHeadingH3">
            Carrinho de Compras
          </Typography>
          <Botao
            classNameBtn="btnUnset"
            onClick={() => dispatch(isCartDropDown(false))}
            title="Fechar carrinho"
          >
            <img src={btnClose} alt="" />
          </Botao>
        </Header>
        <CartDropDownList />
        <CartDropDownSumare
          handleDropDown={() => dispatch(isCartDropDown(false))}
          totValue={cart.totValue}
        />
      </DivCartDropDown>
    );
  }
  return <></>;
};

export default CartDropDown;
