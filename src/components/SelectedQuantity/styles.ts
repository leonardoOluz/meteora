import styled from "styled-components";

export const DivSelectedQuantity = styled.div<{
  $flexDirection: "row" | "column";
}>`
  display: flex;
  flex-direction: ${({$flexDirection}) => $flexDirection};
  gap: 1.6rem;
  box-sizing: border-box;
  align-items: center;

  div {
    display: flex;
    gap: 0.8rem;
    align-items: center;
    box-sizing: border-box;

    .quantity {
      width: 3.9rem;
      padding: .9rem 0;
      text-align: center;
      border: solid 1px white;
      border-radius: 0.4rem;
      color: ${({ theme }) => theme.colorsPrimary.branco};
      box-sizing: border-box;
      font-weight: 700;
      font-size: 1.3rem;
    }

    button {
      padding: 0.5rem;
      font-size: 1.3rem;
      font-weight: 400;
      text-align: center;
      color: ${({ theme }) => theme.colorsPrimary.branco};
      border: solid 1px white;
      border-radius: 50%;
      box-sizing: border-box;
    }
  }
`;
