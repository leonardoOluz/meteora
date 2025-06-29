import { DivRadioSelect, LabelRadioSelect } from "./styles";
import { InputMask } from "../InputMask";

interface IProps {
  nome: "cor" | "tamanho" | "pagamento";
  texto: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
}

const RadioSelect = ({ nome, texto, handleChange, isChecked }: IProps) => {
  return (
    <DivRadioSelect>
      <InputMask
        $classeInput="inputModalProduto"
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
