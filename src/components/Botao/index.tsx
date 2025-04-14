import styled from "styled-components";
import { btnPrimary, btnSecundary, btnTerciario } from "./styles";

const BtnStyle = styled.button<{
  $classNameBtn: "btnPrimary" | "btnSecundary" | "btnTerciario";
}>`
  ${({ $classNameBtn: $botaoClass }) => {
    switch ($botaoClass) {
      case "btnPrimary":
        return btnPrimary;
      case "btnSecundary":
        return btnSecundary;
      case "btnTerciario":
        return btnTerciario;
      default:
        break;
    }
  }}
  cursor: pointer;
`;
interface IProps {
  children: React.ReactNode;
  classNameBtn: "btnPrimary" | "btnSecundary" | "btnTerciario";
  tipo?: "button" | "submit" | "reset";
  handleClick?: () => void;
}
const Botao = ({
  children,
  classNameBtn,
  tipo = "button",
  handleClick,
}: IProps) => {
  return (
    <BtnStyle $classNameBtn={classNameBtn} onClick={handleClick} type={tipo}>
      {children}
    </BtnStyle>
  );
};

export default Botao;
