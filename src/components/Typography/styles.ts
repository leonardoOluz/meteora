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

const titleHeading = css`
  color: #212529;
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 100%;
  letter-spacing: 0rem;
`;

const basicHeading = css`
  margin: 0;
  color: #ffffff;
  font-weight: 500;
  font-size: 1.6rem;
`;

export const TypographyStyle = styled.div<{
  $nameClass?: "displayFour" | "paragraph" | "titleHeading" | "basicHeading";
}>`
  box-sizing: border-box;
  ${({ $nameClass }) => {
    switch ($nameClass) {
      case "displayFour":
        return displayFour;
      case "paragraph":
        return paragraph;
      case "titleHeading":
        return titleHeading;
      case "basicHeading":
        return basicHeading;
      default:
        return paragraph;
    }
  }}
`;
