import { AppDispatch } from "@/store";
import { setCheckedPay } from "@/store/reducers/pay";
import { RootState } from "@/types/store";
import { getStorage, removeStorage } from "@/utils/starage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const usePaymentConfirmed = () => {
  const { checkedPay } = useSelector((state: RootState) => state.pay);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const paymentConfirmed = getStorage("pagamentoConfirmado");
      if (paymentConfirmed === "true") {
        dispatch(setCheckedPay(JSON.parse(paymentConfirmed)));
        removeStorage("pagamentoConfirmado");
      }
    }, 2500);
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [navigate, dispatch]);

  useEffect(() => {
    if (checkedPay) {
      navigate("/checkout/address/pay/summary");
    }
  }, [navigate,checkedPay]);
};

export default usePaymentConfirmed;
