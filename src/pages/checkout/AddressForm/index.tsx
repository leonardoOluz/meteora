import apiCep from "@/api";
import Botao from "@/components/Botao";
import Form from "@/components/Form";
import { Input, InputMask } from "@/components/InputMask";
import { MessageError } from "@/components/MessageError";
import { DivForm, FieldsetForm, LabelForm, LegendForm } from "@/styles/forms";
import { thema } from "@/styles/thema";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { SiGooglestreetview } from "react-icons/si";
import { useNavigate } from "react-router-dom";

interface IFormInputEndereco {
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  localidade: string;
}
interface IData {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  estado: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  regiao: string;
  siafi: string;
  uf: string;
  unidade: string;
  erro?: boolean;
}

const AddressForm = () => {
  const {
    register,
    control,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    watch,
    setError,
    setValue,
    reset,
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
  const navegate = useNavigate();
  const cepInput = watch("cep");
  const fetchConsultaCep = async (cep: string) => {
    if (!cep) {
      setError("cep", {
        type: "manual",
        message: "O campo CEP é obrigatório",
      });
      return;
    }
    try {
      const { data } = await apiCep.get<IData>(`/ws/${cep}/json/`);
      if (data.erro) {
        setError("cep", {
          type: "validate",
          message: "O CEP não existe ou é inválido",
        });
        return;
      }
      setValue("rua", data.logradouro);
      setValue("bairro", data.bairro);
      setValue("localidade", `${data.localidade}, ${data.uf}`);
      setValue("cep", data.cep);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      navegate("/checkout/address/pay");
    }
  }, [isSubmitSuccessful, reset, navegate]);
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
                    id="campo-cep"
                    onBlur={() => fetchConsultaCep(cepInput)}
                    onChange={field.onChange}
                    value={field.value}
                    placeholder="CEP"
                    $error={!!errors.cep}
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
