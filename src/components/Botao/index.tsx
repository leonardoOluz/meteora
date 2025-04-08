import { botaoCabecalho, botaoProdutoCard } from "@/styles/stylesGlobal";
import styled from "styled-components";

const BtnStyle = styled.button<{
  $botaoClass: "botaoProdutoCard" | "botaoCabecalho";
}>`
  ${({ $botaoClass }) => {
    switch ($botaoClass) {
      case "botaoCabecalho":
        return botaoCabecalho;
      case "botaoProdutoCard":
        return botaoProdutoCard;
      default:
        break;
    }
  }}
`;
interface IProps {
  children: React.ReactNode;
  classBotao: "botaoProdutoCard" | "botaoCabecalho";
  tipo?: "button" | "submit" | "reset";
}
const Botao = ({ children, classBotao, tipo = "button" }: IProps) => {
  return <BtnStyle $botaoClass={classBotao} type={tipo}>{children}</BtnStyle>;
};

export default Botao;
