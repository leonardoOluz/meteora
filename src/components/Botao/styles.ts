import { css } from "styled-components";

/* Estilos dos botões */
export const btnPrimary = css`
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
export const btnSecundary = css`
  border: none;
  /* max-width: 10.2rem; */
  font-weight: 500;
  font-size: 1.6rem;
  padding: 0.9rem 1.6rem;
  color: ${({ theme }) => theme.colorsPrimary.branco};
  background-color: ${({ theme }) => theme.colorsPrimary.roxo};
`;
export const btnTerciario = css`
  all: unset;
`;
