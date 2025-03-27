import styled, { css } from "styled-components";

const displayFour = css`
  max-width: 32.2rem;
  margin: 0;
  padding: 0 4rem;
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 3.2rem;
  letter-spacing: 0rem;
  text-align: center;
`;

export const paragraph = css`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.3rem;
  letter-spacing: 0rem;
  text-align: center;
`;

export const TypographyStyle = styled.div<{ $nameClass?: string }>`
  color: ${({ theme }) => theme.colorsPrimary.branco};

  ${({ $nameClass }) => {
    switch ($nameClass) {
      case "displayFour":
        return displayFour;
      case "paragraph":
        return paragraph;
      default:
        return paragraph;
    }
  }}
`;
