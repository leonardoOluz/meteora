import Input from "@/components/Input";
import { DivRadioSelect, LabelRadioSelect } from "./styles";

interface IProps {
  nome: "cor" | "tamanho";
  texto: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void 
}

const RadioSelect = ({ nome, texto, handleChange }: IProps) => {
  return (
    <DivRadioSelect>
      <Input
        value={texto}
        classeInput="inputModalProduto"
        tipo="radio"
        isRequired
        id={texto}
        nome={nome}
        handleChange={handleChange}
      />
      <LabelRadioSelect htmlFor={texto}>{texto}</LabelRadioSelect>
    </DivRadioSelect>
  );
};

export default RadioSelect;
