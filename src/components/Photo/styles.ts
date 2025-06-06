import { IClassImg } from "@/types/componentTypes";
import styled, { css } from "styled-components";

const imgBanner = css`
  width: 100%;
`;
const imgCategoria = css`
  max-width: 14.6rem;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;
const imgFacilidades = css`
  grid-area: imagenFacilidades;
`;
const imgProdutoCard = css`
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    /* width: 33rem; */
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 35rem;
  }
`;
const imgCarrinho = css`
  max-width: 10.9rem;
`;
const imgNossasLojas = css`
  width: 32rem;
  height: 24rem;
  border-radius: 25px;
  box-shadow: 4px 8px 8px 4px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-radius: 0 45px 0 0;
  }
`;
const imgNovidades = css`
  width: 100%;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 41rem;
  }
`;

const objClasseImg = {
  imgBanner,
  imgCategoria,
  imgFacilidades,
  imgProdutoCard,
  imgCarrinho,
  imgNossasLojas,
  imgNovidades,
};

export const FotoStyles = styled.img<{
  $classeImg: IClassImg;
}>`
  object-fit: cover;
  ${({ $classeImg }) => objClasseImg[$classeImg]}
`;
