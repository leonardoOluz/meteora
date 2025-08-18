import { RootState } from "@/types/store";
import { showWrongToast } from "@/utils/showWrongToast";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const usePaymentConfirmed = () => {
  const { checkedPay } = useSelector((state: RootState) => state.pay);
  const navigate = useNavigate();
  const toastShown = useRef(false);

  // Redireciona e mostra toast conforme status do pagamento
  useEffect(() => {
    if (checkedPay) {
      navigate("/checkout/address/pay/summary");
    } else {
      if (!toastShown.current) {
        toastShown.current = true;
        showWrongToast("Você precisa confirmar o pagamento para continuar");
      }
      navigate("/checkout/address/pay");
    }
  }, [navigate, checkedPay]);
};

export default usePaymentConfirmed;
