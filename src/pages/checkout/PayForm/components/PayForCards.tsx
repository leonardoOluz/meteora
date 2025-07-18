import styled from "styled-components";
import Botao from "@/components/Botao";
import Form from "@/components/Form";
import { Input, InputMask } from "@/components/InputMask";
import { DivForm, FieldsetForm, LabelForm, LegendForm } from "@/styles/forms";
import { Controller, useForm } from "react-hook-form";
import { ICredCard } from "@/types/store";
import { MessageError } from "@/components/MessageError";
import { useCardBrandIcon } from "@/hooks/useCardBrandIcon";
import { FaRegCreditCard } from "react-icons/fa";
import checkDate from "@/utils/checkDate";

const DivGridCard = styled.div`
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 2fr 1fr;

  &.classCards {
    display: grid;
    column-gap: 0.5rem;
  }
`;
const PayForCards = () => {
  const {
    register,
    formState: { errors },
    control,
    watch,
    handleSubmit,
    setError,
    clearErrors,
    resetField,
  } = useForm<ICredCard>({
    defaultValues: {
      numberCard: "",
      name: "",
      validity: "",
      cvv: "",
    },
  });
  const watchNumberCard = watch("numberCard");
  const BrandIcon = useCardBrandIcon(watchNumberCard);
  const checkValidity = (value: string) => {
    if (!checkDate(value)) {
      resetField("validity", { defaultValue: "" }); // Limpa o campo se a validação falhar
      setError("validity", {
        type: "required",
        message: "Formato inválido (MM/AAAA)",
      });
    } else {
      clearErrors("validity");
    }
  };
  const handleSubmitForm = (data: ICredCard) => {
    console.log(data);
  };
  return (
    <Form
      classForm="formAddress"
      ariaLabel="Formulario de pagamento"
      handleSubmit={handleSubmit(handleSubmitForm)}
    >
      <FieldsetForm>
        <LegendForm style={{ fontSize: "1.8rem" }}>
          Coloque os dados do cartão
        </LegendForm>

        <DivForm>
          <LabelForm htmlFor="name-Card" id="label-nameCard">
            Nome no cartão
          </LabelForm>
          <Input
            aria-labelledby={
              errors.name
                ? "label-nameCard message-error-name"
                : "label-nameCard"
            }
            type="text"
            $classeInput="inputForm"
            placeholder="Nome no cartão"
            id="name-Card"
            title="Nome no cartão"
            $error={!!errors.name}
            {...register("name", {
              required: "Campo obrigatório",
              minLength: {
                value: 3,
                message: "O nome deve ter pelo menos 3 caracteres",
              },
              maxLength: {
                value: 50,
                message: "O nome não pode ter mais de 50 caracteres",
              },
            })}
          />
          {!!errors.name && (
            <MessageError id="message-error-name">
              {errors.name.message}
            </MessageError>
          )}
        </DivForm>

        <DivGridCard className="classCards">
          <Controller
            name="numberCard"
            control={control}
            render={({ field }) => (
              <DivForm style={{ gridArea: "1/1/3/3" }}>
                <LabelForm htmlFor="number-Card" id="label-numberCard">
                  Número do cartão
                </LabelForm>
                <InputMask
                  name="numberCard"
                  $classeInput="inputForm"
                  mask="0000 0000 0000 0000"
                  placeholder="0000 0000 0000 0000"
                  id="number-Card"
                  title="Numero do cartão"
                  type="text" // Recomenda-se usar type="text" mesmo com máscara, pois type="number" pode causar problemas de formatação e limitar a entrada de zeros à esquerda.
                  onChange={(e) =>
                    field.onChange(e.target.value.replace(/\D/g, ""))
                  }
                  required
                  value={field.value.replace(/\D/g, "")}
                  $error={!!errors.numberCard}
                  aria-labelledby={
                    errors.numberCard
                      ? "label-numberCard message-error-numberCard"
                      : "label-numberCard"
                  }
                />
                {!!errors.numberCard && (
                  <MessageError id="message-error-numberCard">
                    {errors.numberCard.message}
                  </MessageError>
                )}
              </DivForm>
            )}
          />
          <div style={{ gridArea: "2/3/2/4" }}>
            {BrandIcon ? BrandIcon : <FaRegCreditCard size={30} />}
          </div>
        </DivGridCard>

        <DivGridCard>
          <Controller
            name="validity"
            control={control}
            render={({ field }) => (
              <DivForm>
                <LabelForm htmlFor="date-Card" id="label-dateCard">
                  Data de expiração
                </LabelForm>
                <InputMask
                  $classeInput="inputForm"
                  mask="00/0000"
                  placeholder="MM/AAAA"
                  id="date-Card"
                  title="Data de expiração"
                  onChange={(e) => field.onChange(e.target.value)}
                  onBlur={(e) => checkValidity(e.target.value)}
                  value={field.value}
                  required
                  $error={!!errors.validity}
                  aria-labelledby={
                    errors.validity
                      ? "label-dateCard message-error-dateCard"
                      : "label-dateCard"
                  }
                />
                {!!errors.validity && (
                  <MessageError id="message-error-dateCard">
                    {errors.validity.message}
                  </MessageError>
                )}
              </DivForm>
            )}
          />
          <Controller
            name="cvv"
            control={control}
            render={({ field }) => (
              <DivForm>
                <LabelForm htmlFor="cvv-Card" id="label-cvvCard">
                  CVV
                </LabelForm>
                <InputMask
                  $classeInput="inputForm"
                  mask="000"
                  placeholder="000"
                  id="cvv-Card"
                  title="codigo de segurança"
                  onChange={(e) => field.onChange(e.target.value)}
                  value={field.value}
                  $error={!!errors.cvv}
                  aria-labelledby={
                    errors.cvv
                      ? "label-cvvCard message-error-cvvCard"
                      : "label-cvvCard"
                  }
                />
                {!!errors.cvv && (
                  <MessageError id="message-error-cvvCard">
                    {errors.cvv.message}
                  </MessageError>
                )}
              </DivForm>
            )}
          />
        </DivGridCard>

        <Botao
          classNameBtn="btnSecundary"
          type="submit"
          title="Finalizar compra"
        >
          Finalizar compra
        </Botao>
      </FieldsetForm>
    </Form>
  );
};

export default PayForCards;
