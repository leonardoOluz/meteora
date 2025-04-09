import styled from "styled-components";
import { btnPrimary, btnSecundary } from "./styles";

const BtnStyle = styled.button<{
  $classNameBtn:  "btnPrimary" | "btnSecundary";
}>`
  ${({ $classNameBtn: $botaoClass }) => {
    switch ($botaoClass) {
      case "btnPrimary":
        return btnPrimary;
      case "btnSecundary":
        return btnSecundary;
      default:
        break;
    }
  }}
`;
interface IProps {
  children: React.ReactNode;
  classNameBtn: "btnPrimary" | "btnSecundary";
  tipo?: "button" | "submit" | "reset";
}
const Botao = ({ children, classNameBtn, tipo = "button" }: IProps) => {
  return <BtnStyle $classNameBtn={classNameBtn} type={tipo}>{children}</BtnStyle>;
};

export default Botao;
