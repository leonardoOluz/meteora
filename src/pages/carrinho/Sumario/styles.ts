import { basicHendingH4, basicParagraphLead } from "@/styles/stylesGlobal";
import styled from "styled-components";

export const AnsideSumare = styled.aside`
  margin: 0;
  padding: 3.2rem 2.4rem;
  background-color: ${({ theme }) => theme.colorsPrimary.preto};
  width: 100%;
  max-width: 62rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const DlSumare = styled.dl`
  width: 100%;
  color: ${({ theme }) => theme.colorsPrimary.branco};
  display: grid;
  grid-template-areas: "dt dd" "dt dd" "dt dd";
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 3.2rem;
  ${basicParagraphLead}

  .total {
    border-top: 1px solid ${({ theme }) => theme.colorsPrimary.verde};
    padding: 3.2rem 0;
    color: ${({ theme }) => theme.colorsPrimary.verde};
    ${basicHendingH4}
  }

  dd {
    text-align: right;
  }
`;
