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
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  value: string;
}
const FieldTextLogin = ({ text, value, ...rest }: IProps) => {
  const [isPassword, setIsPassword] = useState<boolean>(false);
  return (
    <>
      <label htmlFor={value}>{text}</label>
      <DivInput>
        <Input
          classeInput="inputForm"
          type={isPassword ? "text" : value}
          {...rest}
        />
        {value === "password" && (
          <Botao
            classNameBtn="btnUnset"
            type="button"
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

export default FieldTextLogin;
