import React from "react";
import styled, { css } from "styled-components";

const secaoFacilidades = css`
  background-color: ${({theme}) => theme.colorsPrimary.preto};
`;
const secaoCategorias = css`
  margin: 0 2.65rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SectionStyle = styled.section<{ $classe?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ $classe }) => {
    switch ($classe) {
      case "secaoCategorias":
        return secaoCategorias;
      case "secaoFacilidades":
        return secaoFacilidades;
      default:
        break;
    }
  }}
`;

interface IProps {
  children: React.ReactNode;
  classe: "secaoCategorias" | "secaoFacilidades";
}
const Section = ({ children, classe }: IProps) => {
  return <SectionStyle $classe={classe}>{children}</SectionStyle>;
};

export default Section;
