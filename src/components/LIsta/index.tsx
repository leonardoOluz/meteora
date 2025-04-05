import React from "react";
import styled, { css } from "styled-components";

const listaCategorias = css`
  all: unset;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;

  @media screen and (min-width: 981px) {
    flex-wrap: nowrap;
  }
`;

const listaFelicidades = css`
  width: 100%;
  max-width: 30.4rem;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: auto;
    max-width: none;
    justify-content: center;
    padding: 0 0.5rem;
  }
`;

const ListaStyle = styled.ul<{
  $classe: "listaCategorias" | "listaFelicidades";
}>`
  ${({ $classe }) => {
    switch ($classe) {
      case "listaCategorias":
        return listaCategorias;
      case "listaFelicidades":
        return listaFelicidades;
      default:
        break;
    }
  }}
`;

interface IProps {
  children: React.ReactNode;
  classe: "listaCategorias" | "listaFelicidades";
}

const Lista = ({ children, classe }: IProps) => {
  return <ListaStyle $classe={classe}>{children}</ListaStyle>;
};

export default Lista;
