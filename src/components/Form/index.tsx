import { FormStyle } from "./styles";

interface IProps {
  children: React.ReactNode;
}
const Form = ({ children }: IProps) => {
  return <FormStyle>{children}</FormStyle>;
};

export default Form;
