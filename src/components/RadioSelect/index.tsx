import Input from "@/components/Input";
import { DivRadioSelect, LabelRadioSelect } from "./styles";

interface IProps {
  nome: "cor" | "tamanho";
  texto: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
}

const RadioSelect = ({
  nome,
  texto,
  handleChange,
  isChecked,
}: IProps) => {
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
        checked={isChecked}
      />
      <LabelRadioSelect htmlFor={texto}>{texto}</LabelRadioSelect>
    </DivRadioSelect>
  );
};

export default RadioSelect;
