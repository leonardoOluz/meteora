import { ILista } from "@/types/componentTypes";
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

const listaProdutos = css`
  max-width: 111rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;

const listaCarrinho = css`
  overflow-y: auto;
  /* max-height: 70vh; */
`;

export const ListaStyle = styled.ul<{
  $classe: ILista;
}>`
  ${({ $classe }) => {
    switch ($classe) {
      case "listaCategorias":
        return listaCategorias;
      case "listaFelicidades":
        return listaFelicidades;
      case "listaProdutos":
        return listaProdutos;
      case "listaCarrinho":
        return listaCarrinho;
      default:
        break;
    }
  }}
`;