import Section from "@components/Section";
import { Container, FormStyle, InputStyle } from "./styles";
import Botao from "../Botao";
import Typography from "../Typography";
import { thema } from "@/styles/thema";
import useResize from "@/hooks/useResize";
import transformNumber from "@/utils/transformNumber";

const NewsLetter = () => {
  const { width } = useResize();
  return (
    <Section classNameSection="secaoNewsLetter">
      <FormStyle aria-label="formulario de NewsLetter">
        <Typography
          elementoHtml="p"
          classNameTypograph={
            width < transformNumber(thema.breakpoints.tablet)
              ? "paragraph"
              : "basicParagraphLead"
          }
          isColor={thema.colorsPrimary.cinzaChumbo}
        >
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na
          primeira compra? Cadastre-se!
        </Typography>
        <Container>
          <InputStyle type="email" placeholder="Digite seu email" />
          <Botao classNameBtn="btnSecundary" tipo="submit">
            Enviar
          </Botao>
        </Container>
      </FormStyle>
    </Section>
  );
};

export default NewsLetter;
