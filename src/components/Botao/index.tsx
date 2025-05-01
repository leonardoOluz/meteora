import { IButton } from "@/types/componentTypes";
import { BtnStyle } from "./styles";


interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  classNameBtn: IButton;
  tipo?: "button" | "submit" | "reset";
  handleClick?: () => void;
}
const Botao = ({
  children,
  classNameBtn,
  tipo = "button",
  handleClick,
  ...rest
}: IProps) => {
  return (
    <BtnStyle $classNameBtn={classNameBtn} onClick={handleClick} type={tipo} {...rest}>
      {children}
    </BtnStyle>
  );
};

export default Botao;
