import Typography from "@/components/Typography";
import { thema } from "@/styles/thema";
import { FaCcAmazonPay } from "react-icons/fa";
import styled from "styled-components";

const DivAddForPay = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colorsPrimary.roxo};
  padding: 1rem 2rem;
  border-radius: 0.8rem;
`;

const AddForPay = () => {
  return (
    <DivAddForPay>
      <Typography
        classNameTypograph="basicParagraphBold"
        elementoHtml="p"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        Parcelas de até <strong>12x</strong> sem juros
      </Typography>
      <FaCcAmazonPay size={55} color={thema.colorsPrimary.preto} />
    </DivAddForPay>
  );
};

export default AddForPay;
