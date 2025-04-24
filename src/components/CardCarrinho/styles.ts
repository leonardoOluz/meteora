import { basicParagraphBold } from "@/styles/stylesGlobal";
import styled from "styled-components";

export const ArtCardCart = styled.article`
  background-color: ${({ theme }) => theme.colorsPrimary.preto};
  padding: 3.2rem 2.4rem;
  border-bottom: 1px solid #6c757d;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.6rem;
`;

export const DivImgDescrption = styled.div`
  max-width: 32.7rem;
  display: flex;
  flex-direction: row;
  gap: 1.6rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const DivActionsCart = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;

  span {
    ${basicParagraphBold()}
    color: ${({ theme }) => theme.colorsPrimary.verde};
  }
  svg {
    cursor: pointer;
  }
`;
