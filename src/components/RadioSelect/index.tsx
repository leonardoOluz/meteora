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
        classeInput="inputModalProduto"
        type="radio"
        required
        id={texto}
        name={nome}
        onChange={handleChange}
        checked={isChecked}
        value={texto}
      />
      <LabelRadioSelect htmlFor={texto}>{texto}</LabelRadioSelect>
    </DivRadioSelect>
  );
};

export default RadioSelect;
