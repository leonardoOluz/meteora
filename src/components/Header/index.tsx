import styled from "styled-components";
import { cabecalho, cabecalhoModal } from "./styles";

const HeaderStyle = styled.header<{
  $classHeader: "cabecalho" | "cabecalhoModal";
}>`
  ${({ $classHeader }) => {
    switch ($classHeader) {
      case "cabecalho":
        return cabecalho;
      case "cabecalhoModal":
        return cabecalhoModal;
      default:
        break;
    }
  }}
`;

interface IProps {
  children: React.ReactNode;
  classeHeader: "cabecalho" | "cabecalhoModal";
};

const Header = ({ children, classeHeader: classe }: IProps) => {
  return <HeaderStyle $classHeader={classe}>{children}</HeaderStyle>;
};

export default Header;
