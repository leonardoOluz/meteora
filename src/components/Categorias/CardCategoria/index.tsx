import { DivStyle, SpanStyle } from "./styles";

interface IProps {
  texto: string;
  children: React.ReactNode;
}
const CardCategoria = ({ children, texto }: IProps) => {
  return (
    <DivStyle>
      {children}
      <SpanStyle>{texto}</SpanStyle>
    </DivStyle>
  );
};

export default CardCategoria;
