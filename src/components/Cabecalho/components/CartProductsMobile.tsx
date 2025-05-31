import Botao from "@/components/Botao";
import useResize from "@/hooks/useResize";
import { thema } from "@/styles/thema";
import transformNumber from "@/utils/transformNumber";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { iconsProps } from "../styles";
import { RootState } from "@/types/store";
import { useSelector } from "react-redux";

const CartProductsMobile = () => {
  const { width } = useResize();
  const carrinho = useSelector((state: RootState) => state.carrinho);
  return (
    <>
      {width < transformNumber(thema.breakpoints.tablet) && (
        <Botao classNameBtn="btnUnset" aria-label="carrinho" title="carrinho">
          <Link to="carrinho">
            <BsCart4 {...iconsProps} />
            <span>{carrinho.data.length}</span>
          </Link>
        </Botao>
      )}
    </>
  );
};

export default CartProductsMobile;
