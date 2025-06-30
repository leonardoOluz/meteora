import Form from "@/components/Form";
import { DivForm, FieldsetForm, LegendForm } from "@/styles/forms";
import { PaymentMethod, RootState } from "@/types/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckKindPay from "./components/CheckKindPay";
import PayForPix from "./components/PayForPix";
import { AdsForPay } from "@/components/Ads";
import PayForTicket from "./components/PayForTicket";
import PayForCards from "./components/PayForCards";

const PayForm = () => {
  const { addressChecked } = useSelector((state: RootState) => state.address);
  const { method } = useSelector((state: RootState) => state.pay);
  const navigate = useNavigate();
  useEffect(() => {
    if (!addressChecked) {
      navigate("/checkout/address");
    }
  }, [addressChecked, navigate]);

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
        {method === PaymentMethod.Boleto && <PayForTicket />}
        {method === PaymentMethod.CartaoDeCredito && <PayForCards />}
      </FieldsetForm>
    </Form>
  );
};

export default PayForm;
