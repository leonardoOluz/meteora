import { thema } from "@/styles/thema";
import CardCarrinho from "../CardCarrinho";
import List from "../List";
import ItemList from "../List/ItemList";
import Typography from "../Typography";
import {
  DivCartDropDown,
  DivCartDropDownSumare,
  DivSumareValue,
  PriceSpanCartDropDown,
} from "./styles";
import Botao from "../Botao";
import Header from "../Header";
import btnClose from "./assets/close-button.svg";
import { useRef } from "react";
import useHandleMouseDown from "@/hooks/useHandleMouseDown";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import { selectCartForProduct } from "@/store/selectors/itemSelectors";

interface IProps {
  setDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  dropDown: boolean;
}

const CartDropDown = ({ setDropDown, dropDown }: IProps) => {
  const cartDropDownRef = useRef<HTMLDivElement>(null);
  const carrinho = useSelector((state: RootState) => {
    return selectCartForProduct(state);
  });

  useHandleMouseDown({
    isBoolean: dropDown,
    setIsBoolean: setDropDown,
    isRef: cartDropDownRef,
  });

  if (carrinho.length > 0) {
    return (
      <DivCartDropDown ref={cartDropDownRef}>
        <Header classeHeader="headerDropDown">
          <Typography elementoHtml="h2" classNameTypograph="basicHeadingH3">
            Carrinho de Compras
          </Typography>
          <Botao
            classNameBtn="btnTerciario"
            handleClick={() => setDropDown(false)}
          >
            <img src={btnClose} alt="" />
          </Botao>
        </Header>
        <List
          classeLista="listaCarrinho"
          ariaLabel="lista de carrinho suspensa"
        >
          {carrinho.map((item) => (
            <ItemList key={item.id}>
              <CardCarrinho card={item} cartSuspensa />
            </ItemList>
          ))}
        </List>
        <DivCartDropDownSumare>
          <DivSumareValue>
            <Typography
              elementoHtml="h4"
              classNameTypograph="basicHendingH4"
              isColor={thema.colorsPrimary.verde}
            >
              Total:
            </Typography>
            <PriceSpanCartDropDown>R$ 1020,00</PriceSpanCartDropDown>
          </DivSumareValue>
          <Botao
            classNameBtn="btnSecundary"
            tipo="button"
            handleClick={() => setDropDown(false)}
          >
            Finalizar compra
          </Botao>
        </DivCartDropDownSumare>
      </DivCartDropDown>
    );
  }
  return <></>;
};

export default CartDropDown;
