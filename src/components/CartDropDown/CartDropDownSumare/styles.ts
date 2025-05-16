import { basicHendingH4 } from "@/styles/stylesGlobal";
import styled from "styled-components";

export const DivCartDropDownSumare = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8rem;
  gap: 8rem;
`;

export const DivSumareValue = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PriceSpanCartDropDown = styled.span`
  ${basicHendingH4}
  color: ${({ theme }) => theme.colorsPrimary.verde};
`;
