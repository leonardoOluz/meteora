import styled from "styled-components";
import Typography from "../../../../components/Typography";

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
`;
interface IProps {
  texto: string;
  children: React.ReactNode;
}
const CardCategoria = ({ children, texto }: IProps) => {
  return (
    <DivStyle>
      {children}
      <SpanStyle>
        <Typography elementoHtml="p" nameClass="basicHeading">
          {texto}
        </Typography>
      </SpanStyle>
    </DivStyle>
  );
};

export default CardCategoria;
