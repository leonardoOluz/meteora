import { InputStyles } from "@/types/componentTypes";
import { StyleInput } from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  classeInput: InputStyles;
  error?: boolean;
}
const Input = ({ classeInput, error, ...rest }: IProps) => {
  return <StyleInput $classeInput={classeInput} $error={error} {...rest} />;
};

export default Input;
