import { IClassSection } from "@/types/componentTypes";
import styled, { css } from "styled-components";

export const secaoFacilidades = css`
  background-color: ${({ theme }) => theme.colorsPrimary.preto};
  padding: 3.2rem 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4rem 0;
    gap: 4rem;
  }
`;
export const secaoProdutos = css`
  margin: 5rem 2.65rem 0 2.65rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 4.5rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 4.8rem;
  }
`;
export const secaoCategorias = css`
  margin: 2.4rem 2.65rem 0 2.65rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 4rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 7.4rem;
  }
`;
export const secaoNewsLetter = css`
  padding: 2.85rem 2.65rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3.85rem 3.9rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 6rem 0;
  }
`;

/* objetos de seções */
const sectionStyles = {
  secaoCategorias: secaoCategorias,
  secaoProdutos: secaoProdutos,
  secaoFacilidades: secaoFacilidades,
  secaoNewsLetter: secaoNewsLetter,
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
