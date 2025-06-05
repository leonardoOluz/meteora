import Botao from "@/components/Botao";
import FieldInput from "@/components/FieldInput";
import Form from "@/components/Form";
import { FieldsetForm, LegendForm } from "@/styles/forms";
import { useForm } from "react-hook-form";
const cadastro = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const FormRegister = () => {
  const { register, handleSubmit } = useForm<typeof cadastro>({
    defaultValues: cadastro,
    shouldFocusError: true,
  });
  const submit = (data: typeof cadastro) => console.log(data);
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
          {...register("name", { required: true, minLength: 5 })}
        />
        <FieldInput
          textLabel="Email"
          type="email"
          placeholder="Digite seu email"
          {...register("email", {
            required: true,
            minLength: 5,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        <FieldInput
          textLabel="Senha"
          type="password"
          placeholder="Digite sua senha"
          {...register("password", { required: true })}
        />
        <FieldInput
          textLabel="Confirme sua senha"
          placeholder="Confirme sua senha"
          type="password"
          {...register("confirmPassword", { required: true })}
        />
        <Botao classNameBtn="btnSecundary" type="submit">
          Cadastrar-se
        </Botao>
      </FieldsetForm>
    </Form>
  );
};

export default FormRegister;
