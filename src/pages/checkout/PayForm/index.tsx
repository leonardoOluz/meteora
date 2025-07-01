import Form from "@/components/Form";
import { DivForm, FieldsetForm, LegendForm } from "@/styles/forms";
import { PaymentMethod, RootState } from "@/types/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckKindPay from "./components/CheckKindPay";
import PayForPix from "./components/PayForPix";
import { AdsForPay } from "@/components/Ads";
import PayForCards from "./components/PayForCards";
import BoletoSimulado from "./components/PayForTicket";
import { getStorage, removeStorage } from "@/utils/starage";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { setCheckedPay } from "@/store/reducers/pay";

const PayForm = () => {
  const { addressChecked } = useSelector((state: RootState) => state.address);
  const { method, checkedPay } = useSelector((state: RootState) => state.pay);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!addressChecked) {
      navigate("/checkout/address");
    }
  }, [addressChecked, navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      const pixPay = getStorage("pagamentoConfirmado");
      if (pixPay === "true") {
        setIsPaymentSuccessful(JSON.parse(pixPay));
        removeStorage("pagamentoConfirmado");
        console.log(pixPay);
      }
    }, 2500);
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []);

  useEffect(() => {
    if (isPaymentSuccessful || checkedPay) {
      dispatch(setCheckedPay(true));
      navigate("/checkout/address/pay/summary");
    }
  }, [isPaymentSuccessful, navigate, dispatch, checkedPay]);

  return (
    <Form
      classForm="formAddress"
      ariaLabel="Form de pagamento"
      handleSubmit={(e) => e.preventDefault()}
    >
      <FieldsetForm>
        <LegendForm style={{ fontSize: "1.8rem" }}>
          Escolha a forma de pagamento
        </LegendForm>

        <AdsForPay />
        <DivForm>
          <CheckKindPay />
        </DivForm>
        {method === PaymentMethod.Pix && <PayForPix />}
        {method === PaymentMethod.Boleto && <BoletoSimulado />}
        {method === PaymentMethod.CartaoDeCredito && <PayForCards />}
      </FieldsetForm>
    </Form>
  );
};

export default PayForm;
