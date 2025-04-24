import { IButton } from "@/types/componentTypes";
import { BtnStyle } from "./styles";


interface IProps {
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
}: IProps) => {
  return (
    <BtnStyle $classNameBtn={classNameBtn} onClick={handleClick} type={tipo}>
      {children}
    </BtnStyle>
  );
};

export default Botao;
