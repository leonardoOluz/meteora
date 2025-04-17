import { FormStyle } from "./styles";

interface IProps {
  children: React.ReactNode;
  ariaLabel: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
const Form = ({ children, ariaLabel, handleSubmit }: IProps) => {
  return (
    <FormStyle aria-label={ariaLabel} onSubmit={handleSubmit}>
      {children}
    </FormStyle>
  );
};

export default Form;
