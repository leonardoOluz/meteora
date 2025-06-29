import RadioSelect from "@/components/RadioSelect";
import styled from "styled-components";

const DivCheckKindPay = styled.div`
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
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
    name: "pix",
  },
];
const CheckKindPay = () => {
  return (
    <DivCheckKindPay>
      {kindPay.map((item) => (
        <RadioSelect
          key={item.id}
          nome="pagamento"
          texto={item.name}
          handleChange={(e) => console.log(e.target.value)}
        />
      ))}
    </DivCheckKindPay>
  );
};

export default CheckKindPay;
