import Botao from "@/components/Botao";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DivError404 = styled.div`
  padding: 2.6rem;
  display: flex;
  flex-direction: column;
  gap: 8rem;
  align-items: center;
`;

const PageError404 = () => {
  const navegate = useNavigate();
  return (
    <Section classNameSection="secao facilidades">
      <DivError404>
        <img src="/notFound404.jpeg" alt="pagina nao encontrada" />
        <Typography classNameTypograph="basicHeadingH3" elementoHtml="h2">
          Página não encontrada
        </Typography>
        <Botao classNameBtn="btnQuarciario" onClick={() => navegate("/")}>
          <Typography
            classNameTypograph="basicParagraphBold"
            elementoHtml="p"
            isColor="#000"
          >
            Voltar para pagina home
          </Typography>
        </Botao>
      </DivError404>
    </Section>
  );
};

export default PageError404;
