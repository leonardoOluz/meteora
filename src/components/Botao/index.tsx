import { IButton } from "@/types/componentTypes";
import { BtnStyle } from "./styles";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  classNameBtn: IButton;
}
const Botao = ({ children, classNameBtn, ...rest }: IProps) => {
  return (
    <BtnStyle $classNameBtn={classNameBtn} {...rest}>
      {children}
    </BtnStyle>
  );
};

export default Botao;
