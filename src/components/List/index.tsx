import { ILista } from "@/types/componentTypes";
import { ListaStyle } from "./styles";

interface IProps {
  children: React.ReactNode;
  classeLista: ILista;
  ariaLabel: string;
}

const List = ({ children, classeLista: classe, ariaLabel }: IProps) => {
  return (
    <ListaStyle $classe={classe} aria-label={ariaLabel}>
      {children}
    </ListaStyle>
  );
};

export default List;