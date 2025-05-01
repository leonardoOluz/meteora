import { forwardRef, Ref } from "react";
import { FormStyle } from "./styles";

interface IProps {
  children: React.ReactNode;
  ariaLabel: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  classForm?: "basic" | "selectedModal";
}
const Form = ({ children, ariaLabel, handleSubmit, classForm = "basic" }: IProps, ref: Ref<HTMLFormElement>) => {
  return (
    <FormStyle ref={ref} aria-label={ariaLabel} onSubmit={handleSubmit} $classForm={classForm}>
      {children}
    </FormStyle>
  );
};

export default forwardRef(Form);
