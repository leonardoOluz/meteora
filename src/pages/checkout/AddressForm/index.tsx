import Botao from "@/components/Botao";
import Form from "@/components/Form";
import { Input, InputMask } from "@/components/InputMask";
import { MessageError } from "@/components/MessageError";
import { DivForm, FieldsetForm, LabelForm, LegendForm } from "@/styles/forms";
import { thema } from "@/styles/thema";
import { Controller, useForm } from "react-hook-form";
import { SiGooglestreetview } from "react-icons/si";

interface IFormInputEndereco {
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  localidade: string;
}

const AddressForm = () => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputEndereco>({
    mode: "all",
    defaultValues: {
      bairro: "",
      cep: "",
      localidade: "",
      numero: "",
      rua: "",
    },
  });
  const handleDateSubmit = (data: IFormInputEndereco) => {
    console.log("Dados do endereço:", data);
  };

  return (
    <Form
      classForm="addressForm"
      ariaLabel="Formulário de endereço"
      handleSubmit={handleSubmit(handleDateSubmit)}
    >
      <FieldsetForm>
        <LegendForm>Digite seu endereço</LegendForm>
        <DivForm>
          <SiGooglestreetview size={55} color={thema.colorsPrimary.roxo} />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <Controller
              name="cep"
              control={control}
              rules={{
                required: "O campo CEP é obrigatório",
              }}
              render={({ field }) => (
                <>
                  <LabelForm>Cep</LabelForm>
                  <InputMask
                    aria-labelledby="message-error-cep"
                    $classeInput="inputForm"
                    mask={"00000-000"}
                    placeholder="CEP"
                    $error={!!errors.cep}
                    {...field}
                  />
                  {!!errors.cep && (
                    <MessageError id="message-error-cep">
                      {errors.cep.message}
                    </MessageError>
                  )}
                </>
              )}
            />
          </div>
        </DivForm>
        <DivForm>
          <LabelForm>Rua</LabelForm>
          <Input
            aria-labelledby="message-error-rua"
            $classeInput="inputForm"
            type="text"
            id="rua"
            placeholder="Rua"
            $error={!!errors.rua}
            {...register("rua", {
              required: "O campo rua é obrigatório",
              pattern: {
                value: /^[A-Za-z\s]+$/i,
                message: "A rua deve conter apenas letras",
              },
            })}
          />
          {!!errors.rua && (
            <MessageError id="message-error-rua">
              {errors.rua.message}
            </MessageError>
          )}
        </DivForm>
        <DivForm>
          <Controller
            name="numero"
            control={control}
            rules={{
              required: "O campo número é obrigatório",
              pattern: {
                value: /^\d{1,8}$/,
                message: "Número inválido, deve conter apenas números",
              },
            }}
            render={({ field }) => (
              <>
                <LabelForm htmlFor="numero">Numero</LabelForm>
                <InputMask
                  aria-labelledby="message-error-numero"
                  $classeInput="inputForm"
                  mask={"00000000"}
                  placeholder="número"
                  id="numero"
                  $error={!!errors.numero}
                  {...field}
                />
                {!!errors.numero && (
                  <MessageError id="message-error-numero">
                    {errors.numero.message}
                  </MessageError>
                )}
              </>
            )}
          />
        </DivForm>
        <DivForm>
          <LabelForm htmlFor="bairro">Bairro</LabelForm>
          <Input
            aria-labelledby="message-error-bairro"
            $classeInput="inputForm"
            type="text"
            id="bairro"
            placeholder="bairro"
            $error={!!errors.bairro}
            {...register("bairro", {
              required: "O campo bairro é obrigatório",
            })}
          />
          {!!errors.bairro && (
            <MessageError id="message-error-bairro">
              {errors.bairro.message}
            </MessageError>
          )}
        </DivForm>
        <DivForm>
          <LabelForm htmlFor="cidade">Cidade</LabelForm>
          <Input
            aria-labelledby="message-error-localidade"
            $classeInput="inputForm"
            placeholder="Cidade"
            id="cidade"
            $error={!!errors.localidade}
            {...register("localidade", {
              required: "O campo cidade é obrigatório",
            })}
          />
          {!!errors.localidade && (
            <MessageError id="message-error-localidade">
              {errors.localidade.message}
            </MessageError>
          )}
        </DivForm>
        <Botao classNameBtn="btnSecundary" type="submit">
          Próximo
        </Botao>
      </FieldsetForm>
    </Form>
  );
};

export default AddressForm;
