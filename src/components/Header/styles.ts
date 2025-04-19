import { css } from "styled-components";

export const cabecalho = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-color: ${({ theme }) => theme.colorsPrimary.preto};
    padding: 1rem;
    flex-direction: row;
    justify-content: space-around;
  }
`;
export const cabecalhoModal = css`
  padding: 1.6rem 2.3rem;
  background-color: ${({ theme }) => theme.colorsPrimary.preto};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
