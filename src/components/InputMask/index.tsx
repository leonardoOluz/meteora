import styled from "styled-components";
import { IMaskInput } from "react-imask";
import { checkInputProps, InputProps } from "./styles";

export const Input = styled.input<InputProps>`
  ${({ $classeInput, $error }) => checkInputProps({ $classeInput, $error })}
`;
export const InputMask = styled(IMaskInput)<InputProps>`
  ${({ $classeInput, $error }) => checkInputProps({ $classeInput, $error })}
`;
