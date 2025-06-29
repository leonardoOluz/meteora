import Form from "@/components/Form";
import { DivForm, FieldsetForm, LegendForm } from "@/styles/forms";
import { RootState } from "@/types/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckKindPay from "./CheckKindPay";
import AddForPay from "./AddForPay";
import PayForPix from "./PayForPix";

const PayForm = () => {
  const { addressChecked } = useSelector((state: RootState) => state.address);
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
        <AddForPay />
        <DivForm>
          <CheckKindPay />
        </DivForm>
        <PayForPix />
      </FieldsetForm>
    </Form>
  );
};

export default PayForm;
