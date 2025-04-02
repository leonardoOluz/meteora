import styled, { css } from "styled-components";

const displayFour = css`
  color: ${({ theme }) => theme.colorsPrimary.branco};
  max-width: 32.2rem;
  margin: 0;
  padding: 0 4rem;
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 3.2rem;
  letter-spacing: 0rem;
  text-align: center;
`;

const paragraph = css`
  color: ${({ theme }) => theme.colorsPrimary.branco};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.3rem;
  letter-spacing: 0rem;
  text-align: center;
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

const basicHeadingH4 = css`
  color: ${({ theme }) => theme.colorsPrimary.branco};
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 100%;
  letter-spacing: 0rem;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3.2rem;
  }
`;

export const TypographyStyle = styled.div<{
  $nameClass?: "displayFour" | "paragraph" | "basicHeadingH3" | "basicHeadingH4";
}>`
  box-sizing: border-box;
  ${({ $nameClass }) => {
    switch ($nameClass) {
      case "displayFour":
        return displayFour;
      case "paragraph":
        return paragraph;
      case "basicHeadingH3":
        return basicHeadingH3;
      case "basicHeadingH4":
        return basicHeadingH4;
      default:
        return paragraph;
    }
  }}
`;
