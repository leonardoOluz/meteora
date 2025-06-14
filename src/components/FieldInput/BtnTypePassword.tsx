import Botao from "../Botao";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { iconsProps } from "./styles";

interface IBtnTypePassword {
  isPassword?: boolean;
  type?: string;
  handleClick?: () => void;
}
const BtnTypePassword = ({
  type,
  handleClick,
  isPassword,
}: IBtnTypePassword) => {
  return (
    <>
      {type === "password" && (
        <Botao
          classNameBtn="btnUnset"
          type="button"
          tabIndex={-1}
          onClick={handleClick}
        >
          {isPassword ? (
            <FaRegEyeSlash size={iconsProps.size} style={iconsProps.style} />
          ) : (
            <FaRegEye size={iconsProps.size} style={iconsProps.style} />
          )}
        </Botao>
      )}
    </>
  );
};

export default BtnTypePassword;
