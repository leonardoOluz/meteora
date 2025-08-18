import Botao from "@/components/Botao";
import Form from "@/components/Form";
import { useForm } from "react-hook-form";
import FieldInput from "@/components/FieldInput";
import { ContainerForm, FieldsetForm, LegendForm } from "@/styles/forms";
import { MessageError } from "@/components/MessageError";
import { useEffect } from "react";
import { ILogin } from "@/types/usuarios";
import { useDispatch } from "react-redux";
import { loginUser } from "@/store/reducers/usuario";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "@/store";

const FormLogin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.usuario);
  const cart = useSelector((state: RootState) => state.carrinho);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ILogin>({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

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
  const submit = (data: ILogin) => {
    dispatch(loginUser(data));
  };

  return (
    <Form
      handleSubmit={handleSubmit(submit)}
      classForm="formBasic"
      ariaLabel="formulario de login"
    >
      <FieldsetForm>
        <LegendForm>Login do usuário</LegendForm>

        <ContainerForm>
          <FieldInput
            textLabel="Email"
            placeholder="Digite seu email"
            type="email"
            autoComplete="email"
            aria-describedby={
              errors.email ? "Email-label message-error-email" : "Email-label"
            }
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
        </ContainerForm>

        <ContainerForm>
          <FieldInput
            textLabel="Senha"
            placeholder="Digite sua senha"
            type="password"
            aria-describedby={
              errors.password
                ? "Senha-label message-error-password"
                : "Senha-label"
            }
            error={!!errors.password?.message}
            {...register("password", {
              required: "O campo senha é obrigatorio!",
            })}
          />
          {!!errors.password && (
            <MessageError id="message-error-password">
              {errors.password.message}
            </MessageError>
          )}
        </ContainerForm>

        <Botao
          classNameBtn="btnSecundary"
          type="submit"
          style={{ marginTop: "2rem" }}
        >
          Entrar
        </Botao>
      </FieldsetForm>
    </Form>
  );
};

export default FormLogin;
