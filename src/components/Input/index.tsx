import { InputStyles } from "@/types/componentTypes";
import { StyleInput } from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  classeInput: InputStyles;
}
const Input = ({ classeInput, ...rest }: IProps) => {
  return <StyleInput $classeInput={classeInput} {...rest} />;
};

export default Input;
