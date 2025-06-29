import { basicParagraphSmall } from "@/styles/stylesGlobal";
import { InputStyles } from "@/types/componentTypes";
import { css } from "styled-components";

 const inputNewsLetter = css`
  width: 60%;
  padding: 0.8rem 0 0.6rem 0;
  border: 1px solid ${({ theme }) => theme.colorsPrimary.preto};
  border-right: none;
  text-decoration: none;
  outline: none;
  ${basicParagraphSmall(false)}
  padding-left: 1.5rem;
  &::placeholder {
    font-family: ${({ theme }) => theme.fontFamily};
  }
`;
 const inputBuscador = css`
  width: 80%;
  padding: 0.8rem 0;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0rem;
  background-color: #ffffff;
  color: ${({ theme }) => theme.colorsPrimary.preto};
  outline: none;
  box-sizing: border-box;
  border: 0.1rem solid;
  border-color: ${({ theme }) => theme.colorsPrimary.preto};
  padding-left: ${({ theme }) => theme.spacing.sm};

  &::placeholder {
    color: #6c757d;
    line-height: 2rem;
    font-size: 1.3rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
    width: 14.5rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 17rem;
    line-height: 2rem;
    font-size: 1.5rem;

    &::placeholder {
      font-size: 1.5rem;
      line-height: 2.4rem;
    }
  }
`;
 const inputModalProduto = css`
  all: unset;
  cursor: pointer;
  width: 1.3rem;
  height: 1.3rem;
  border: 2px solid #dee2e6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;

  &[type="radio"]:hover {
    box-shadow: 0px 0px 4px 5px ${({ theme }) => theme.colorsPrimary.roxo};
    background-color: #75d7f0;
  }

  &[type="radio"]:checked {
    background-color: ${({ theme }) => theme.colorsPrimary.preto};
  }
`;
 const inputForm = ($error?: boolean) => css`
  width: 100%;
  padding: 0.8rem 0;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0rem;
  background-color: #ffffff;
  color: ${({ theme }) => theme.colorsPrimary.preto};
  outline: none;
  box-sizing: border-box;
  border: 0.1rem solid;
  border-color: ${({ theme }) =>
    $error ? theme.inputState.error : theme.colorsPrimary.preto};
  padding-left: ${({ theme }) => theme.spacing.sm};

  &::placeholder {
    color: #6c757d;
    line-height: 2rem;
    font-size: 1.3rem;
  }
  &:focus {
    outline-color: ${({ theme }) => ($error ? theme.inputState.error : "")};
  }
`;
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  $classeInput: InputStyles;
  $error?: boolean;
}
export const checkInputProps = (props: InputProps) => {
  switch (props.$classeInput) {
    case "inputBuscador":
      return inputBuscador;
    case "inputModalProduto":
      return inputModalProduto;
    case "inputForm":
      return inputForm(props.$error);
    case "inputNewsLetter":
      return inputNewsLetter;
    default:
      break;
  }
};
