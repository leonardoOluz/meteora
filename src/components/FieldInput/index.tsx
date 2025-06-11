import Botao from "@/components/Botao";
import Input from "@/components/Input";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import styled from "styled-components";
const iconsProps = {
  size: 20,
  style: { position: "absolute" as const, right: 10, top: 10 },
};
const DivInput = styled.div`
  position: relative;
`;
const LabelInput = styled.label`
  font-size: 1.6rem;
`;
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  textLabel: string;
  error?: boolean;
}
const FieldInput = ({ textLabel, error, ...rest }: IProps) => {
  const { type, ...restProps } = rest;
  const [isPassword, setIsPassword] = useState<boolean>(false);
  return (
    <>
      <LabelInput htmlFor={rest.name}>{textLabel}</LabelInput>
      <DivInput>
        <Input
          id={rest.name}
          classeInput="inputForm"
          type={isPassword ? "text" : type}
          error={error}
          {...restProps}
        />
        {type === "password" && (
          <Botao
            classNameBtn="btnUnset"
            type="button"
            tabIndex={-1}
            onClick={() => setIsPassword((prev) => !prev)}
          >
            {isPassword ? (
              <FaRegEyeSlash size={iconsProps.size} style={iconsProps.style} />
            ) : (
              <FaRegEye size={iconsProps.size} style={iconsProps.style} />
            )}
          </Botao>
        )}
      </DivInput>
    </>
  );
};

export default FieldInput;
