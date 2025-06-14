import styled from "styled-components";
import { IMaskInput } from "react-imask";
import { checkInputProps, InputMaskProps } from "./styles";

export const Input = styled.input<InputMaskProps>`
  ${({ $classeInput, $error }) => checkInputProps({ $classeInput, $error })}
`;
export const InputMask = styled(IMaskInput)<InputMaskProps>`
  ${({ $classeInput, $error }) => checkInputProps({ $classeInput, $error })}
`;
