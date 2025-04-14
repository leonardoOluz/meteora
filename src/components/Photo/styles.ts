import { css } from "styled-components";

export const imgBanner = css`
  width: 100%;
`;
export const imgCategoria = css`
  max-width: 14.6rem;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;
export const imgFacilidades = css`
  grid-area: imagenFacilidades;
`;
export const imgProdutoCard = css`
  /* width: 100%; */

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 33rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 35rem;
  }
`;
