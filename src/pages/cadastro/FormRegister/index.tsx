import Botao from "@/components/Botao";
import FieldInput from "@/components/FieldInput";
import Form from "@/components/Form";
import { MessageError } from "@/components/MessageError";
import { AppDispatch } from "@/store";
import { addNewUser } from "@/store/reducers/usuario";
import { ContainerForm, FieldsetForm, LegendForm } from "@/styles/forms";
import { RootState } from "@/types/store";
import { Usuario } from "@/types/usuarios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const cadastro = {
  nome: "",
  email: "",
  password: "",
  verifyPassword: "",
};
const FormRegister = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<Usuario>({
    mode: "all",
    defaultValues: cadastro,
  });
  const user = useSelector((state: RootState) => state.usuario);
  const cart = useSelector((state: RootState) => state.carrinho);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const password = watch("password");

  const checkPassword = {
    minLength: (val: string | undefined) =>
      (val?.length ?? 0) >= 6 ||
      "O campo senha deve ter pelo menos 6 caracteres",
    checkEmpty: (val: string | undefined) =>
      !!val || "O campo senha deve ser preenchido",
    validatePassword: (val: string | undefined) =>
      val === password || "As senhas devem ser iguais",
  };
  const checkEmail = {
    emailEmpty: (val: string) => !!val || "Verifique seu email",
    isEmailValid: (val: string) => {
      return (
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(val) ||
        "O email deve ser valido!"
      );
    },
  };

  useEffect(() => {
    if (isSubmitSuccessful && user.isLogado) {
      if (cart.data.length) {
        navigate("/carrinho");
        reset();
        return;
      }
      navigate("/");
      reset();
    }
  }, [isSubmitSuccessful, reset, user, cart, navigate]);

  const submit = (data: Usuario) => {
    dispatch(
      addNewUser({
        email: data.email,
        nome: data.nome,
        password: data.password,
      })
    );
  };

  return (
    <Form
      classForm="formBasic"
      ariaLabel="formulario de cadastro"
      handleSubmit={handleSubmit(submit)}
    >
      <FieldsetForm>
        <LegendForm>Cadastre-se</LegendForm>
        <ContainerForm>
          <FieldInput
            textLabel="Nome"
            type="text"
            placeholder="Digite seu nome"
            aria-describedby="error-message-name"
            error={!!errors.nome}
            {...register("nome", {
              required: "Por favor, insira um nome",
              minLength: {
                message: "O nome deve ter pelo menos 5 letras",
                value: 5,
              },
            })}
          />
          {!!errors.nome && (
            <MessageError id="error-message-name">
              {errors.nome.message}
            </MessageError>
          )}
        </ContainerForm>
        <ContainerForm>
          <FieldInput
            textLabel="Email"
            type="email"
            placeholder="Digite seu email"
            aria-describedby="error-message-email"
            error={!!errors.email}
            {...register("email", {
              required: "Por favor, insira um email",
              validate: checkEmail,
            })}
          />
          {!!errors.email && (
            <MessageError id="error-message-email">
              {errors.email.message}
            </MessageError>
          )}
        </ContainerForm>
        <ContainerForm>
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
        </ContainerForm>
        <ContainerForm>
          <FieldInput
            textLabel="Confirme sua senha"
            placeholder="Confirme sua senha"
            type="password"
            error={!!errors.verifyPassword}
            aria-describedby="error-message-confirm-password"
            {...register("verifyPassword", {
              validate: checkPassword,
            })}
          />
          {!!errors.verifyPassword && (
            <MessageError id="error-message-confirm-password">
              {errors.verifyPassword.message}
            </MessageError>
          )}
        </ContainerForm>
        <Botao
          classNameBtn="btnSecundary"
          type="submit"
          style={{ marginTop: "2rem" }}
        >
          Cadastrar-se
        </Botao>
      </FieldsetForm>
    </Form>
  );
};

export default FormRegister;
