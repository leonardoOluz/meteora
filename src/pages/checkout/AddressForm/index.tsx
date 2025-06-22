import apiCep, { simulateShipping } from "@/api";
import Botao from "@/components/Botao";
import Form from "@/components/Form";
import { Input, InputMask } from "@/components/InputMask";
import { MessageError } from "@/components/MessageError";
import { DivForm, FieldsetForm, LabelForm, LegendForm } from "@/styles/forms";
import { thema } from "@/styles/thema";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { SiGooglestreetview } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { DivGridCep, DivGridStreet } from "../styles";
import { useSelector } from "react-redux";
import { IFrete, RootState } from "@/types/store";
import ShippingPrices from "@/components/ShippingPrices";

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
  const [frete, setFrete] = useState<IFrete>();
  const cart = useSelector((state: RootState) => state.carrinho).totProduct;
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
      const dataShipping = await simulateShipping(cart);
      if (data.erro) {
        setError("cep", {
          type: "validate",
          message: "O CEP não existe ou é inválido",
        });
        return;
      }
      if (dataShipping.isFrete) setFrete(dataShipping);
      setValue("rua", data.logradouro);
      setValue("bairro", data.bairro);
      setValue("localidade", `${data.localidade}, ${data.uf}`);
      setValue("cep", data.cep);
      console.log(dataShipping);
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
      classForm="formAddress"
      ariaLabel="Formulário de endereço"
      handleSubmit={handleSubmit(handleDateSubmit)}
    >
      <FieldsetForm>
        <LegendForm>Digite seu endereço</LegendForm>

        <DivGridCep>
          <SiGooglestreetview size={55} color={thema.colorsPrimary.roxo} />
          <DivForm style={{ gap: "0.4rem" }}>
            <Controller
              name="cep"
              control={control}
              rules={{
                required: "O campo CEP é obrigatório",
              }}
              render={({ field }) => (
                <>
                  <LabelForm htmlFor="campo-cep" id="label-cep">
                    Cep
                  </LabelForm>
                  <InputMask
                    aria-labelledby={
                      errors.cep ? "label-cep message-error-cep" : "label-cep"
                    }
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
          </DivForm>
        </DivGridCep>

        <DivGridStreet>
          <DivForm>
            <LabelForm htmlFor="rua" id="label-rua">
              Rua
            </LabelForm>
            <Input
              aria-labelledby={
                errors.rua ? "label-rua message-error-rua" : "label-rua"
              }
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
                required: "Obrigatorio",
              }}
              render={({ field }) => (
                <>
                  <LabelForm htmlFor="numero" id="label-numero">
                    Numero
                  </LabelForm>
                  <InputMask
                    aria-labelledby={
                      errors.numero
                        ? "label-numero message-error-numero"
                        : "label-numero"
                    }
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
        </DivGridStreet>

        <DivForm>
          <LabelForm htmlFor="bairro" id="label-bairro">
            Bairro
          </LabelForm>
          <Input
            aria-labelledby={
              errors.bairro
                ? "label-bairro message-error-bairro"
                : "label-bairro"
            }
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
          <LabelForm htmlFor="cidade" id="label-localidade">
            Cidade
          </LabelForm>
          <Input
            aria-labelledby={
              errors.localidade
                ? "label-localidade message-error-localidade"
                : "label-localidade"
            }
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

        {frete?.isFrete && <ShippingPrices {...frete}/>}

        <Botao
          classNameBtn="btnSecundary"
          type="submit"
          style={{ marginTop: "2rem" }}
        >
          Próximo
        </Botao>
      </FieldsetForm>
    </Form>
  );
};

export default AddressForm;
