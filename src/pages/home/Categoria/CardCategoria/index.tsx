import styled from "styled-components";

const DivStyle = styled.div`
  all: unset;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
const SpanStyle = styled.span`
  background-color: ${({ theme }) => theme.colorsPrimary.preto};
  text-align: center;
  padding: 0.95rem 0;
  box-sizing: border-box;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 100%;
  color: ${({ theme }) => theme.colorsPrimary.branco};
`;
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
