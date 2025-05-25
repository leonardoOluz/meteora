import { thema } from "@/styles/thema";
import { SectionStyleKeys } from "@/types/componentTypes";
import styled, { css, keyframes } from "styled-components";

// Animação de gradiente rotativo
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

// Estilos das seções
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
const secaoNewsletter = css`
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
  padding: 2.85rem 2.65rem;
  animation: ${rotateGradient} 2s linear infinite;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3.85rem 3.9rem;
  }
`;
const secaoBuscar = css`
  padding: 2.85rem 2.65rem;
`;

// Objeto de estilos das seções, usando ReturnType<typeof css> para tipagem
const sectionStyles: Record<SectionStyleKeys, ReturnType<typeof css>> = {
  "secao categorias": secaoCategorias,
  "secao produtos": secaoProdutos,
  "secao facilidades": secaoFacilidades,
  "secao newsletter": secaoNewsletter,
  "secao carrinho": secaoCarrinho,
  "secao promocoes": secaoPromocoes,
  "secao banner": secaoBanner,
  "secao nossas lojas": secaoNossasLojas,
  "secao novidades": secaoNovidades,
  "secao produtos buscados": secaoBuscar,
};

// Componente principal de seção
export const SectionStyle = styled.section<{
  $classNameSection?: SectionStyleKeys;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  ${({ $classNameSection }) =>
    $classNameSection && sectionStyles[$classNameSection]};
`;

// Exportação dos estilos individuais caso necessário
export {
  secaoFacilidades,
  secaoProdutos,
  secaoCategorias,
  secaoNewsletter,
  secaoCarrinho,
  secaoPromocoes,
  secaoBanner,
  secaoNossasLojas,
  secaoNovidades,
  secaoBuscar,
  rotateGradient,
};