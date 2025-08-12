import { CategoryList } from "@/types/componentTypes";
import { ListaStyle } from "./styles";

interface IProps extends React.HTMLAttributes<HTMLUListElement> {
  classeLista: CategoryList;
}

const List = ({ children, classeLista: classe, ...rest }: IProps) => {
  return (
    <ListaStyle $classe={classe} {...rest}>
      {children}
    </ListaStyle>
  );
};

export default List;
