import React from "react";
import styled, { css } from "styled-components";

const secaoFacilidades = css`
  background-color: ${({ theme }) => theme.colorsPrimary.preto};
  padding: 3.2rem 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4rem 0;
    gap: 4rem;
  }
`;
const secaoProdutos = css`
  margin: 5rem 2.65rem 0 2.65rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 4.5rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 4.8rem;
  }
`;
const secaoCategorias = css`
  margin: 2.4rem 2.65rem 0 2.65rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 4rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 7.4rem;
  }
`;
const SectionStyle = styled.section<{
  $classe?: "secaoCategorias" | "secaoProdutos" | "secaoFacilidades";
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  ${({ $classe }) => {
    switch ($classe) {
      case "secaoCategorias":
        return secaoCategorias;
      case "secaoProdutos":
        return secaoProdutos;
      case "secaoFacilidades":
        return secaoFacilidades;
      default:
        break;
    }
  }}
`;

interface IProps {
  children: React.ReactNode;
  classe: "secaoCategorias" | "secaoProdutos" | "secaoFacilidades";
}
const Section = ({ children, classe }: IProps) => {
  return <SectionStyle $classe={classe}>{children}</SectionStyle>;
};

export default Section;
