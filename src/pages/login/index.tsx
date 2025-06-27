import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { thema } from "@/styles/thema";
import FormLogin from "./FormLogin";
import { Link, useNavigate } from "react-router-dom";
import useWriteSlowly from "@/hooks/useWriteSlowly";
import { DivFadeInForm } from "@/styles/forms";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import { useEffect } from "react";
const title = "Entre com sua conta!";
const Login = () => {
  const writeTitle = useWriteSlowly(title);
  const { isLogado } = useSelector((state: RootState) => state.usuario);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogado) {
      navigate("/");
    }
  }, [isLogado, navigate]);
  
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
        <FormLogin />
        <Link to="/cadastro" style={{ textDecoration: "none" }}>
          <Typography
            elementoHtml="h3"
            classNameTypograph="basicParagraphLead"
            isColor={thema.colorsPrimary.cinzaChumbo}
          >
            Ainda não possui cadastro?
          </Typography>
        </Link>
      </DivFadeInForm>
    </Section>
  );
};

export default Login;
