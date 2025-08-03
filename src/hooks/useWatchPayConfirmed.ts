import { AppDispatch } from "@/store";
import { setCheckedPay } from "@/store/reducers/pay";
import { getStorage, removeStorage } from "@/utils/starage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useWatchPayConfirmed = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Checa confirmação de pagamento no localStorage a cada 2,5s
  useEffect(() => {
    const interval = setInterval(() => {
      const paymentConfirmed = getStorage("pagamentoConfirmado");
      if (paymentConfirmed === "true") {
        dispatch(setCheckedPay(true));
        removeStorage("pagamentoConfirmado");
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [dispatch]);
};

export default useWatchPayConfirmed;
