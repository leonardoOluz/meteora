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
import { selectCartForProduct } from "@/store/selectors/itemSelectors";

interface IProps {
  setDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  dropDown: boolean;
}

const CartDropDown = ({ setDropDown, dropDown }: IProps) => {
  const cartDropDownRef = useRef<HTMLDivElement>(null);
  const cart = useSelector((state: RootState) => state.carrinho);
  const carrinho = useSelector((state: RootState) => {
    return selectCartForProduct(state);
  });

  useEventMouse({
    isBoolean: dropDown,
    setIsBoolean: setDropDown,
    isRef: cartDropDownRef,
    eventType: "mouseover",
  });

  if (carrinho.length > 0) {
    return (
      <DivCartDropDown ref={cartDropDownRef}>
        <Header classeHeader="headerDropDown">
          <Typography elementoHtml="h2" classNameTypograph="basicHeadingH3">
            Carrinho de Compras
          </Typography>
          <Botao
            classNameBtn="btnUnset"
            handleClick={() => setDropDown(false)}
            title="Fechar carrinho"
          >
            <img src={btnClose} alt="" />
          </Botao>
        </Header>
        <CartDropDownList />
        <CartDropDownSumare
          handleDropDown={() => setDropDown(false)}
          totValue={cart.totValue}
        />
      </DivCartDropDown>
    );
  }
  return <></>;
};

export default CartDropDown;
