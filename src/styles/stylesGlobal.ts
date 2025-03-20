import { css } from "styled-components";

export const inputBuscador = css`
  min-width: 17rem;
  height: 3.8rem;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.4rem;
  letter-spacing: 0rem;
  color: #6c757d;
  background-color: #ffffff;
  padding-left: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colorsPrimary.preto};
  outline: none;

  &::placeholder {
    padding-left: ${({ theme }) => theme.spacing.sm};
  }
`;

export const basicParagraph = css`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.3rem;
  letter-spacing: 0rem;
`;
