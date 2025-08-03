import { RootState } from "@/types/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const usePaymentConfirmed = () => {
  const { checkedPay } = useSelector((state: RootState) => state.pay);
  const navigate = useNavigate();

  // Redireciona e mostra toast conforme status do pagamento
  useEffect(() => {
    if (checkedPay) {
      navigate("/checkout/address/pay/summary");
    } else {
      if (!toast.isActive("pay-toast")) {
        toast.error("Verifique seu pagamento! ", {
          toastId: "pay-toast",
          hideProgressBar: true,
          autoClose: 2500,
          theme: "colored",
        });
      }
      navigate("/checkout/address/pay");
    }
  }, [navigate, checkedPay]);
};

export default usePaymentConfirmed;
