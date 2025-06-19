import { forwardRef, Ref } from "react";
import { FormStyle } from "./styles";
import { FormClass } from "@/types/componentTypes";

interface IProps {
  children: React.ReactNode;
  ariaLabel: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  classForm?: FormClass;
}
const Form = ({ children, ariaLabel, handleSubmit, classForm = "basic" }: IProps, ref: Ref<HTMLFormElement>) => {
  return (
    <FormStyle ref={ref} aria-label={ariaLabel} onSubmit={handleSubmit} $classForm={classForm}>
      {children}
    </FormStyle>
  );
};

export default forwardRef(Form);
