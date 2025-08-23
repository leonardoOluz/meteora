import { AppDispatch } from "@/store";
import { clearAddress } from "@/store/reducers/address";
import { clearCart } from "@/store/reducers/carrinho";
import { resetFrete } from "@/store/reducers/frete";
import { clearPay } from "@/store/reducers/pay";
import { useDispatch } from "react-redux";

const useCleanStatus = () => {
  const dispatch = useDispatch<AppDispatch>();

  const clearStatus = () => {
    dispatch(clearCart());
    dispatch(clearAddress());
    dispatch(resetFrete());
    dispatch(clearPay());
  };

  return clearStatus;
};

export default useCleanStatus;
