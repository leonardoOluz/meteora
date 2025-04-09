import { IGrid } from "@/interface/IU";
import { css } from "styled-components";
/* Estilos da Typography */
export const paragraph = css`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.3rem;
  text-align: center;
`;
export const basicParagraphBold = (isGrid?: IGrid) => css`
  ${!!isGrid && `grid-area: ${isGrid};`}
  margin: 0;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.3rem;
`;
export const basicParagraphSmall = (isGrid?: IGrid) => css`
  ${!!isGrid && `grid-area: ${isGrid};`}
  margin: 0;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 2rem;
`;
export const basicHeadingH3 = css`
  color: ${({ theme }) => theme.colorsPrimary.cinzaChumbo};
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 100%;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 3.2rem;
  }
`;
export const basicHeadingH2 = css`
  margin: 0;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 2.9rem;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3.2rem;
  }
`;
export const basicParagraphLead = css`
  font-weight: 400;
  font-size: 2rem;
  line-height: 100%;
`;