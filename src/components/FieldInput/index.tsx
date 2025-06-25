import { useState } from "react";
import { Input } from "../InputMask";
import { DivFieldInput, DivInput, LabelInput } from "./styles";
import BtnTypePassword from "./BtnTypePassword";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  textLabel: string;
  error?: boolean;
}
const FieldInput = ({ textLabel, error, ...rest }: IProps) => {
  const { type, ...restProps } = rest;
  const [isPassword, setIsPassword] = useState<boolean>(false);
  
  return (
    <DivFieldInput>
      <LabelInput htmlFor={rest.name} id={`${textLabel}-label`}>{textLabel}</LabelInput>
      <DivInput>
        <Input
          id={rest.name}
          $classeInput="inputForm"
          type={isPassword ? "text" : type}
          $error={error}
          {...restProps}
        />
       <BtnTypePassword type={type} handleClick={() => setIsPassword(!isPassword)}/> 
      </DivInput>
    </DivFieldInput>
  );
};

export default FieldInput;
