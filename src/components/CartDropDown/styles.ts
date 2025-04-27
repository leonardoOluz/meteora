import { basicHendingH4 } from "@/styles/stylesGlobal";
import styled from "styled-components";

export const DivCartDropDown = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  background-color: ${({ theme }) => theme.colorsPrimary.preto};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: 8rem;
`;

export const DivCartDropDownSumare = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8rem;
  gap: 8rem;
`;

export const PriceSpanCartDropDown = styled.span`
  ${basicHendingH4}
  color: ${({ theme }) => theme.colorsPrimary.verde};
`;

export const DivSumareValue = styled.div`
  display: flex;
  justify-content: space-between;
`