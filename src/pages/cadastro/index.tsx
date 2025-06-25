import Section from "@/components/Section";
import Typography from "@/components/Typography";
import FormRegister from "./FormRegister";
import useWriteSlowly from "@/hooks/useWriteSlowly";
import { Link } from "react-router-dom";
import { thema } from "@/styles/thema";
import { DivFadeInForm } from "@/styles/forms";
const title = "Vamos criar sua conta!";
const Cadastro = () => {
  const writeTitle = useWriteSlowly(title);

  return (
    <Section classNameSection="secao login">
      <Typography
        classNameTypograph="basicHeadingH3"
        elementoHtml="h2"
        isColor={thema.colorsPrimary.preto}
      >
        {writeTitle}
      </Typography>
        <DivFadeInForm>
          <FormRegister />
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Typography
              elementoHtml="h3"
              classNameTypograph="basicParagraphLead"
              isColor={thema.colorsPrimary.cinzaChumbo}
            >
              Já possui cadastro? Entrar
            </Typography>
          </Link>
        </DivFadeInForm>
    </Section>
  );
};

export default Cadastro;
