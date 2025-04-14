import Input from "@/components/Input";
import { DivRadioSelect, LabelRadioSelect } from "./styles";

interface IProps {
  nome: "cores" | "tamanho";
  texto: string;
}

const RadioSelect = ({ nome, texto }: IProps) => {
  return (
    <DivRadioSelect>
      <Input
        value={texto}
        classeInput="inputModalProduto"
        tipo="radio"
        id={texto}
        nome={nome}
        handleChange={(e) => {
          console.log(e.currentTarget.value);
        }}
      />
      <LabelRadioSelect htmlFor={texto}>{texto}</LabelRadioSelect>
    </DivRadioSelect>
  );
};

export default RadioSelect;
