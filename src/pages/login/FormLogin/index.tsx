import Botao from "@/components/Botao";
import Form from "@/components/Form";
import { useForm } from "react-hook-form";
import FieldInput from "@/components/FieldInput";
import { FieldsetForm, LegendForm } from "@/styles/forms";

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
      <FieldsetForm>
        <LegendForm>Login do usuário</LegendForm>
        <FieldInput
          textLabel="Email"
          placeholder="Digite seu email"
          type="email"
          {...register("email", { required: true })}
        />
        <FieldInput
          textLabel="Senha"
          placeholder="Digite sua senha"
          type="password"
          {...register("password", { required: true })}
        />
        <Botao classNameBtn="btnSecundary" type="submit">
          Entrar
        </Botao>
      </FieldsetForm>
    </Form>
  );
};

export default FormLogin;
