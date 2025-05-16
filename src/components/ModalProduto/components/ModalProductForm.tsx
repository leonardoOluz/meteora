import Botao from "@/components/Botao";
import Form from "@/components/Form";
import RadioSelect from "@/components/RadioSelect";
import { basicParagraphSmallBold } from "@/styles/stylesGlobal";
import styled from "styled-components";

const FieldsetStyle = styled.fieldset`
  width: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
const LegendStyle = styled.legend`
  ${basicParagraphSmallBold}
  display: block;
`;
const DivRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding-top: 1.6rem;
`;
interface ModalProductFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  colors: string[];
  sizes: string[];
  isColor: string;
  isSize: string;
  setIsColor: React.Dispatch<React.SetStateAction<string>>;
  setIsSize: React.Dispatch<React.SetStateAction<string>>;
}

const ModalProductForm = ({
  handleSubmit,
  colors,
  isColor,
  sizes,
  isSize,
  setIsColor,
  setIsSize,
}: ModalProductFormProps) => {
  return (
    <Form ariaLabel="itens opcionais" handleSubmit={handleSubmit}>
      <FieldsetStyle>
        <LegendStyle aria-label="cores">Cores:</LegendStyle>
        <DivRadio>
          {colors.map((itemCor) => (
            <RadioSelect
              key={itemCor}
              nome="cor"
              texto={itemCor}
              handleChange={(e) => {
                setIsColor(e.target.value);
              }}
              isChecked={itemCor === isColor}
            />
          ))}
        </DivRadio>
      </FieldsetStyle>
      <FieldsetStyle>
        <LegendStyle aria-label="tamanhos">Tamanho:</LegendStyle>
        <DivRadio>
          {sizes.map((itemTamanho) => (
            <RadioSelect
              key={itemTamanho}
              nome="tamanho"
              texto={itemTamanho}
              handleChange={(e) => {
                setIsSize(e.target.value);
              }}
              isChecked={itemTamanho === isSize}
            />
          ))}
        </DivRadio>
      </FieldsetStyle>
      <Botao classNameBtn="btnSecundary" tipo="submit">
        Adicionar à sacola
      </Botao>
    </Form>
  );
};

export default ModalProductForm;
