import styled from "styled-components";

export const DivPay = styled.div`
  width: 100%;
  max-width: 45rem;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border-color: ${({ theme }) => theme.colorsPrimary.preto};
  border-radius: 0.8rem;
  background-color: rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.1);
`;
