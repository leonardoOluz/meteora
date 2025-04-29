import { basicParagraphBold } from "@/styles/stylesGlobal";
import styled from "styled-components";

/* Cart */
export const ArtCardCart = styled.article`
  position: relative;
  background-color: ${({ theme }) => theme.colorsPrimary.preto};
  padding: 3.2rem 2.4rem;
  border-bottom: 1px solid #6c757d;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.6rem;
  box-sizing: border-box;
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
  svg {
    cursor: pointer;
  }
`;

export const PriceSpanCardCart = styled.span`
  ${basicParagraphBold()}
  color: ${({ theme }) => theme.colorsPrimary.verde};
`;

/* Cart DropDown */
export const ArtCardCartDropDown = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 54rem;
  display: flex;
  justify-content: space-between;
  margin: 4rem 8rem;
  padding-bottom: 3.2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colorsPrimary.cinza};

  &:last-child {
    margin-bottom: 3.2rem;
  }
  .cardImgDescription {
    display: flex;
    gap: 1.6rem;
  }
`;

export const DivCarDropDown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.6rem 0;
`;
