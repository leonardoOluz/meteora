import { css } from "styled-components";

export const inputBuscador = css`
  width: 80%;
  padding: 0.8rem 0;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0rem;
  background-color: #ffffff;
  color: ${({ theme }) => theme.colorsPrimary.preto};
  outline: none;
  box-sizing: border-box;
  border: 0.1rem solid;
  border-color: ${({ theme }) => theme.colorsPrimary.preto};
  padding-left: ${({ theme }) => theme.spacing.sm};

  &::placeholder {
    color: #6c757d;
    line-height: 2rem;
    font-size: 1.3rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
    width: 14.5rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 17rem;
    line-height: 2rem;
    font-size: 1.5rem;

    &::placeholder {
      font-size: 1.5rem;
      line-height: 2.4rem;
    }
  }
`;