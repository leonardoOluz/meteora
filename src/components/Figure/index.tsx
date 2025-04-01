import styled from "styled-components";
import Typography from "../Typography";

const FigureSyle = styled.figure`
  all: unset;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
const FigcaptionStyle = styled.figcaption`
  background-color: ${({ theme }) => theme.colorsPrimary.preto};
  text-align: center;
  padding: 0.95rem 0;
  box-sizing: border-box;
`;
interface IProps {
  texto: string;
  children: React.ReactNode;
}
const Figure = ({ children, texto }: IProps) => {
  return (
    <FigureSyle>
      {children}
      <FigcaptionStyle>
        <Typography elementoHtml="p" nameClass="basicHeading">
          {texto}
        </Typography>
      </FigcaptionStyle>
    </FigureSyle>
  );
};

export default Figure;
