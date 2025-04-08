import { IGrid } from "@/interface/IU";
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
/* Estilos dos botões */
export const botaoCabecalho = css`
  padding: 0 1.515rem;
  border: 0.1rem solid;
  border-color: ${({ theme }) => theme.colorsPrimary.preto};
  font-size: 1.6rem;
  line-height: 100%;
  letter-spacing: 0.046rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colorsPrimary.preto};
  background-color: transparent;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-weight: inherit;
    font-size: 1.3rem;
    line-height: 2rem;
    letter-spacing: 0rem;
    padding: 0.8rem 1.8rem;
    border-color: ${({ theme }) => theme.colorsPrimary.branco};
    color: ${({ theme }) => theme.colorsPrimary.branco};
  }
`;
export const botaoProdutoCard = css`
  margin-top: 1rem;
  border: none;
  max-width: 10.2rem;
  font-weight: 500;
  font-size: 1.6rem;
  padding: 0.9rem 1.6rem;
  color: ${({ theme }) => theme.colorsPrimary.branco};
  background-color: ${({ theme }) => theme.colorsPrimary.roxo};
`;
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
