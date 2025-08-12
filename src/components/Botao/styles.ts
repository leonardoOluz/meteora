import { ButtonClass } from "@/types/componentTypes";
import styled, { css } from "styled-components";

/* Estilos dos botões */
const btnPrimary = css`
  padding: 0 1.515rem;
  border: 0.1rem solid;
  border-color: ${({ theme }) => theme.colorsPrimary.preto};
  font-size: 1.6rem;
  line-height: 100%;
  letter-spacing: 0.046rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colorsPrimary.preto};
  background-color: transparent;
  box-shadow: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-weight: inherit;
    font-size: 1.3rem;
    line-height: 2rem;
    letter-spacing: 0rem;
    padding: 0.8rem 1.8rem;
    border-color: ${({ theme }) => theme.colorsPrimary.branco};
    color: ${({ theme }) => theme.colorsPrimary.branco};
  }
`;
const btnSecundary = css`
  border: none;
  font-weight: 500;
  font-size: 1.6rem;
  padding: 0.9rem 1.6rem;
  color: ${({ theme }) => theme.colorsPrimary.branco};
  background-color: ${({ theme }) => theme.colorsPrimary.roxo};
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.99);
  }
`;
const btnTerciario = css`
  all: unset;
  padding: 0.5rem;
  font-size: 1.3rem;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.colorsPrimary.branco};
  border: solid 1px white;
  border-radius: 50%;
  box-sizing: border-box;
`;
const btnQuarciario = css`
  font-weight: 500;
  font-size: 1.6rem;
  padding: 0.9rem 1.6rem;
  border: 1px solid ${({ theme }) => theme.colorsPrimary.roxo};
  color: ${({ theme }) => theme.colorsPrimary.roxo};
  background-color: ${({ theme }) => theme.colorsPrimary.branco};
`;
const btnModalClose = css`
  all: unset;
  position: absolute;
  top: 5px;
  right: 5px;
`;
const btnUnset = css`
  all: unset;
`;
const classBtns = {
  btnPrimary,
  btnSecundary,
  btnTerciario,
  btnQuarciario,
  btnUnset,
  btnModalClose,
};
export const BtnStyle = styled.button<{
  $classNameBtn: ButtonClass;
}>`
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  transition: transform 200ms ease-in-out;
  ${({ $classNameBtn }) => classBtns[$classNameBtn]}
  cursor: pointer;
`;
