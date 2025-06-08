import Botao from "@/components/Botao";
import Form from "@/components/Form";
import { useForm } from "react-hook-form";
import FieldInput from "@/components/FieldInput";
import { FieldsetForm, LegendForm } from "@/styles/forms";
import { MessageError } from "@/components/MessageError";
import { useEffect } from "react";

const login = {
  email: "",
  password: "",
};

interface ILogin {
  email: string;
  password: string;
}

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ILogin>({ mode: "all", defaultValues: login });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
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
          aria-describedby="message-error-email"
          error={!!errors.email?.message}
          {...register("email", {
            required: "O campo email deve ser preenchido",
          })}
        />
        {!!errors.email && (
          <MessageError id="message-error-email">
            {errors.email.message}
          </MessageError>
        )}
        <FieldInput
          textLabel="Senha"
          placeholder="Digite sua senha"
          type="password"
          aria-describedby="message-error-password"
          error={!!errors.password?.message}
          {...register("password", {
            required: "O campo senha é obrigatorio!",
            minLength: {
              value: 6,
              message: "Ops, o campo senha tem que ser maior que 6 caracteres!",
            },
          })}
        />
        {!!errors.password && (
          <MessageError id="message-error-password">
            {errors.password.message}
          </MessageError>
        )}
        <Botao
          classNameBtn="btnSecundary"
          type="submit"
          style={{ marginTop: "1rem" }}
        >
          Entrar
        </Botao>
      </FieldsetForm>
    </Form>
  );
};

export default FormLogin;
