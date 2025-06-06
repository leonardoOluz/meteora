import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { thema } from "@/styles/thema";
import FormLogin from "./FormLogin";
import { Link } from "react-router-dom";
import useWriteSlowly from "@/hooks/useWriteSlowly";
import { DivFadeInForm } from "@/styles/forms";
const title = "Entre com sua conta!";
const Login = () => {
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
      {writeTitle.length === title.length && (
        <DivFadeInForm>
          <FormLogin />
          <Link to="/cadastro" style={{ textDecoration: "none" }}>
            <Typography
              elementoHtml="p"
              classNameTypograph="basicParagraphBold"
            >
              Ainda não possui cadastro?
            </Typography>
          </Link>
        </DivFadeInForm>
      )}
    </Section>
  );
};

export default Login;
