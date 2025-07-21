import styled from "styled-components";
import LoaderDualRing from "../Loader";

const SpanPayment = styled.span`
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--color-primary);
`;

const ProcessingPayment = () => {
  return (
    <>
      <SpanPayment>Processando pagamento...</SpanPayment>
      <LoaderDualRing />
    </>
  );
};

export default ProcessingPayment;
