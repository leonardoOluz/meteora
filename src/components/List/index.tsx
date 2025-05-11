import { ILista } from "@/types/componentTypes";
import { ListaStyle } from "./styles";

interface IProps extends React.HTMLAttributes<HTMLUListElement> {
  classeLista: ILista;
}

const List = ({ children, classeLista: classe, ...rest }: IProps) => {
  return (
    <ListaStyle $classe={classe} {...rest}>
      {children}
    </ListaStyle>
  );
};

export default List;
