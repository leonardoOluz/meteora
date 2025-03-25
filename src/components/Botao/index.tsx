import { buttonPrimary } from "@/styles/stylesGlobal";
import styled from "styled-components";

const BtnStyle = styled.button`
  ${buttonPrimary}
`;
interface IProps {
  children: React.ReactNode;
}
const Botao = ({ children }: IProps) => {
  return <BtnStyle>{children}</BtnStyle>;
};

export default Botao;
