import Botao from "@/components/Botao";
import FieldInput from "@/components/FieldInput";
import Form from "@/components/Form";
import { MessageError } from "@/components/MessageError";
import { FieldsetForm, LegendForm } from "@/styles/forms";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
const cadastro = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const FormRegister = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<typeof cadastro>({
    mode: "all",
    defaultValues: cadastro,
  });
  const password = watch("password");
  const checkPassword = {
    minLength: (val: string) =>
      val.length >= 6 || "O campo senha deve ter pelo menos 6 caracteres",
    checkEmpty: (Val: string) => !!Val || "O campo senha deve ser preenchido",
    validatePassword: (val: string) =>
      val === password || "As senhas devem ser iguais",
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      console.log("reset");
    }
  }, [isSubmitSuccessful, reset]);

  const submit = (data: typeof cadastro) => {
    console.log(data);
  };

  return (
    <Form
      classForm="basic"
      ariaLabel="formulario de cadastro"
      handleSubmit={handleSubmit(submit)}
    >
      <FieldsetForm>
        <LegendForm>Cadastre-se</LegendForm>
        <FieldInput
          textLabel="Nome"
          type="text"
          placeholder="Digite seu nome"
          aria-describedby="error-message-name"
          error={!!errors.name}
          {...register("name", {
            required: "Por favor, insira um nome",
            minLength: {
              message: "O nome deve ter pelo menos 5 letras",
              value: 5,
            },
          })}
        />
        {!!errors.name && (
          <MessageError id="error-message-name">
            {errors.name.message}
          </MessageError>
        )}
        <FieldInput
          textLabel="Email"
          type="email"
          placeholder="Digite seu email"
          aria-describedby="error-message-email"
          error={!!errors.email}
          {...register("email", {
            required: "Por favor, insira um email",
            pattern: {
              message: "Por favor, insira um email valido",
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            },
          })}
        />
        {!!errors.email && (
          <MessageError id="error-message-email">
            {errors.email.message}
          </MessageError>
        )}
        <FieldInput
          textLabel="Senha"
          type="password"
          placeholder="Digite sua senha"
          aria-describedby="error-message-password"
          error={!!errors.password}
          {...register("password", {
            required: "Por favor, insira uma senha",
            minLength: {
              value: 6,
              message: "O campo senha deve ter pelo menos 6 caracteres",
            },
          })}
        />
        {!!errors.password && (
          <MessageError id="error-message-password">
            {errors.password.message}
          </MessageError>
        )}
        <FieldInput
          textLabel="Confirme sua senha"
          placeholder="Confirme sua senha"
          type="password"
          error={!!errors.confirmPassword}
          aria-describedby="error-message-confirm-password"
          {...register("confirmPassword", {
            validate: checkPassword,
          })}
        />
        {!!errors.confirmPassword && (
          <MessageError id="error-message-confirm-password">
            {errors.confirmPassword.message}
          </MessageError>
        )}
        <Botao
          classNameBtn="btnSecundary"
          type="submit"
          style={{ marginTop: "1rem" }}
        >
          Cadastrar-se
        </Botao>
      </FieldsetForm>
    </Form>
  );
};

export default FormRegister;
