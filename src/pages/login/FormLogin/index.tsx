import Botao from "@/components/Botao";
import Form from "@/components/Form";
import { useForm } from "react-hook-form";
import FieldInput from "@/components/FieldInput";
import { FieldsetForm, LegendForm } from "@/styles/forms";
import { MessageError } from "@/components/MessageError";
import { useEffect } from "react";
import { ILogin } from "@/types/usuarios";
import { useDispatch } from "react-redux";
import { authenticateUser } from "@/store/reducers/usuario";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const dispatch = useDispatch();
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
    dispatch(authenticateUser(data));
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
