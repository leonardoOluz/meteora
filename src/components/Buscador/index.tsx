import { inputBuscador } from "@/styles/stylesGlobal";
import styled from "styled-components";

const BuscadorStyle = styled.input`
  ${inputBuscador}
`;

interface IProps {
  texto: string;
  setTexto: React.Dispatch<React.SetStateAction<string>>;
  placeHolder: string;
}
const Buscador = ({ texto, setTexto, placeHolder }: IProps) => {
  return (
    <BuscadorStyle
      value={texto}
      onChange={(event) => setTexto(event.target.value)}
      placeholder={placeHolder}
    />
  );
};

export default Buscador;
