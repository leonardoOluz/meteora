import { thema } from "@/styles/thema";
import { IClassSection } from "@/types/componentTypes";
import styled, { css, keyframes } from "styled-components";

const rotateGradient = keyframes`
0% {
  background-image: linear-gradient(
    0deg,
    ${thema.colorsPrimary.verde},
    ${thema.colorsPrimary.coral},
    ${thema.colorsPrimary.roxo}
  );
}
25% {
  background-image: linear-gradient(
    45deg,
    ${thema.colorsPrimary.verde},
    ${thema.colorsPrimary.coral},
    ${thema.colorsPrimary.roxo}
  );
}
50% {
  background-image: linear-gradient(
    90deg,
    ${thema.colorsPrimary.verde},
    ${thema.colorsPrimary.coral},
    ${thema.colorsPrimary.roxo}
  );
}
75% {
  background-image: linear-gradient(
    135deg,
    ${thema.colorsPrimary.verde},
    ${thema.colorsPrimary.coral},
    ${thema.colorsPrimary.roxo}
  );
}
100% {
  background-image: linear-gradient(
    180deg,
    ${thema.colorsPrimary.verde},
    ${thema.colorsPrimary.coral},
    ${thema.colorsPrimary.roxo}
  );
}
`;

const secaoFacilidades = css`
  background-color: ${({ theme }) => theme.colorsPrimary.preto};
  padding: 3.2rem 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4rem 0;
    gap: 4rem;
  }
`;
const secaoProdutos = css``;
const secaoCategorias = css``;

const secaoNewsLetter = css`
  padding: 2.85rem 2.65rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3.85rem 3.9rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 6rem 0;
  }
`;
const secaoCarrinho = css`
  gap: 0;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 3.2rem;
  }
`;
const secaoPromocoes = css`
  padding: 2.85rem 2.65rem;
`;
const secaoBanner = css`
  all: unset;
`;
const secaoNossasLojas = css`
  padding: 2.4rem;
  background-color: rgba(0, 0, 0, 0.05);
  align-items: normal;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4rem 2.65rem 0 2.65rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-top: 7.4rem;
  }
`;
const secaoNovidades = css`
  background-image: linear-gradient(
    180deg,
    ${({ theme }) => theme.colorsPrimary.verde},
    ${({ theme }) => theme.colorsPrimary.coral},
    ${({ theme }) => theme.colorsPrimary.roxo}
  );
  padding: 2.85rem 2.65rem;

  animation: ${rotateGradient} 2s linear infinite;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3.85rem 3.9rem;
  }
`;
/* objetos de seções */
const sectionStyles = {
  "secao categorias": secaoCategorias,
  "secao produtos": secaoProdutos,
  "secao facilidades": secaoFacilidades,
  "secao newsLetter": secaoNewsLetter,
  "secao carrinho": secaoCarrinho,
  "secao promocoes": secaoPromocoes,
  "secao banner": secaoBanner,
  "secao nossas lojas": secaoNossasLojas,
  "secao novidades": secaoNovidades,
};
export const SectionStyle = styled.section<{
  $classNameSection?: IClassSection;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  ${({ $classNameSection }) =>
    $classNameSection && sectionStyles[$classNameSection]};
`;
