import Botao from "@/components/Botao";
import Form from "@/components/Form";
import { LoginFieldset, LoginLegend } from "./styles";
import FieldTextLogin from "../FieldTextLogin";
import { useForm } from "react-hook-form";

const login = {
  email: "",
  password: "",
};

interface ILogin {
  email: string;
  password: string;
}

const FormLogin = () => {
  const { register, handleSubmit } = useForm<ILogin>({ defaultValues: login });
  const submit = (data: ILogin) => {
    console.log(data);
  };
  return (
    <Form
      handleSubmit={handleSubmit(submit)}
      classForm="basic"
      ariaLabel="formulario de login"
    >
      <LoginFieldset>
        <LoginLegend>Login do usuário</LoginLegend>
        <FieldTextLogin
          text="Email"
          value="email"
          placeholder="Digite seu email"
          required
          {...register("email")}
        />
        <FieldTextLogin
          text="Senha"
          value="password"
          placeholder="Digite sua senha"
          required
          {...register("password")}
        />
        <Botao classNameBtn="btnSecundary" type="submit">
          Entrar
        </Botao>
      </LoginFieldset>
    </Form>
  );
};

export default FormLogin;
