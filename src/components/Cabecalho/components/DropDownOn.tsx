import CartDropDown from "@/components/CartDropDown";
import useResize from "@/hooks/useResize";
import { thema } from "@/styles/thema";
import { RootState } from "@/types/store";
import transformNumber from "@/utils/transformNumber";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const DropDownOn = () => {
  const cart = useSelector((state: RootState) => state.carrinho);
  const width = useResize();
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/carrinho" &&
      cart.isCartDropDown &&
      width >= transformNumber(thema.breakpoints.tablet) ? (
        <CartDropDown />
      ) : null}
    </>
  );
};

export default DropDownOn;
