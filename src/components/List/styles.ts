import { basicParagraphSmallBold } from "@/styles/stylesGlobal";
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
`;

const listSelectedModal = css`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  li {
    border: 1px solid ${({ theme }) => theme.colorsPrimary.preto};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 1.6rem;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    justify-content: center;
    ${basicParagraphSmallBold}
    cursor: pointer;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;

const listPromocoes = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;

const classLists = {
  listaCategorias,
  listaFelicidades,
  listaProdutos,
  listaCarrinho,
  listSelectedModal,
  listPromocoes
};

export const ListaStyle = styled.ul<{
  $classe: ILista;
}>`
  ${({ $classe }) => classLists[$classe]}
`;
