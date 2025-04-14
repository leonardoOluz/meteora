import { ILista } from "@/types/componentTypes";
import { ListaStyle } from "./styles";

interface IProps {
  children: React.ReactNode;
  classe: ILista;
  ariaLabel: string;
}

const Lista = ({ children, classe, ariaLabel }: IProps) => {
  return (
    <ListaStyle $classe={classe} aria-label={ariaLabel}>
      {children}
    </ListaStyle>
  );
};

export default Lista;
