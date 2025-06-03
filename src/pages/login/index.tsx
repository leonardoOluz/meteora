import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { thema } from "@/styles/thema";
import FormLogin from "./FormLogin";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Section classNameSection="secao login">
      <Typography
        classNameTypograph="basicHeadingH3"
        elementoHtml="h2"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        Entre com sua conta!
      </Typography>
      <FormLogin />
      <Link to="/cadastro" style={{ textDecoration: "none" }}>
        <Typography elementoHtml="p" classNameTypograph="basicParagraphBold">
          Ainda não possui cadastro?
        </Typography>
      </Link>
    </Section>
  );
};

export default Login;
