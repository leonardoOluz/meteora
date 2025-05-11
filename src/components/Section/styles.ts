import { IClassSection } from "@/types/componentTypes";
import styled, { css } from "styled-components";

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
  margin-top: 2.4rem;
  align-items: normal;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 4rem 2.65rem 0 2.65rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 7.4rem;
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
