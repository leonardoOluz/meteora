import RadioSelect from "@/components/RadioSelect";
import { AppDispatch } from "@/store";
import { setTypePay } from "@/store/reducers/pay";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const DivCheckKindPay = styled.div`
  margin: 1rem auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.8rem;
  border-bottom: 2px solid ${({ theme }) => theme.colorsPrimary.cinzaChumbo};
`;
const kindPay = [
  {
    id: 1,
    name: "Boleto",
  },
  {
    id: 2,
    name: "Cartão de Crédito",
  },
  {
    id: 3,
    name: "Pix",
  },
];
const CheckKindPay = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Normalize value to match the union type
    if (
      value === "Boleto" ||
      value === "Cartão de Crédito" ||
      value === "Pix" ||
      value === ""
    ) {
      dispatch(setTypePay(value));
    }
  };
  return (
    <DivCheckKindPay>
      {kindPay.map((item) => (
        <RadioSelect
          key={item.id}
          nome="pagamento"
          texto={item.name}
          handleChange={handleChange}
        />
      ))}
    </DivCheckKindPay>
  );
};

export default CheckKindPay;
