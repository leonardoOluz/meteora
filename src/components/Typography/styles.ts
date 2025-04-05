import styled, { css } from "styled-components";

const paragraph = css`
  color: ${({ theme }) => theme.colorsPrimary.branco};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.3rem;
  letter-spacing: 0rem;
  text-align: center;
`;
const basicParagraphBold = css`
  grid-area: tituloFacilidades;
  margin: 0;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.3rem;
  color: ${({ theme }) => theme.colorsPrimary.verde};
`;
const basicParagraphSmall = css`
  max-width: 19rem;
  grid-area: descricaoFacilidades;
  margin: 0;
  color: ${({ theme }) => theme.colorsPrimary.branco};
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 2rem;
`;
const basicHeadingH3 = css`
  color: #212529;
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 100%;
  letter-spacing: 0rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 3.2rem;
  }
`;
const basicHeadingH2 = css`
  margin: 0;
  color: ${({ theme }) => theme.colorsPrimary.branco};
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 2.9rem;
  letter-spacing: 0rem;
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3.2rem;
  }
`;
export const TypographyStyle = styled.div<{
  $nameClass?:
    | "paragraph"
    | "basicParagraphBold"
    | "basicParagraphSmall"
    | "basicHeadingH3"
    | "basicHeadingH2";
}>`
  box-sizing: border-box;
  ${({ $nameClass }) => {
    switch ($nameClass) {
      case "paragraph":
        return paragraph;
      case "basicParagraphBold":
        return basicParagraphBold;
      case "basicParagraphSmall":
        return basicParagraphSmall;
      case "basicHeadingH3":
        return basicHeadingH3;
      case "basicHeadingH2":
        return basicHeadingH2;
      default:
        return paragraph;
    }
  }}
`;
