import styled from "styled-components";
import { inputBuscador, inputModalProduto } from "./styles";

const StyleInput = styled.input<{
  $classeInput: "inputBuscador" | "inputModalProduto";
}>`
  ${({ $classeInput }) => {
    switch ($classeInput) {
      case "inputBuscador":
        return inputBuscador;
      case "inputModalProduto":
        return inputModalProduto;
      default:
        break;
    }
  }}
`;
interface IProps {
  value?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
  tipo?: React.HTMLInputTypeAttribute;
  classeInput: "inputBuscador" | "inputModalProduto";
  id?: string;
  nome?: string;
  isRequired?: boolean;
}
const Input = ({
  value,
  handleChange,
  placeHolder,
  tipo = "text",
  classeInput,
  id,
  nome,
  isRequired
}: IProps) => {
  return (
    <StyleInput
      id={id}
      name={nome}
      $classeInput={classeInput}
      value={value}
      onChange={handleChange}
      placeholder={placeHolder}
      type={tipo}
      required={isRequired}
    />
  );
};

export default Input;
