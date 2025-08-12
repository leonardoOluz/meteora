import { HeaderStyle } from "./styles";
import { HeaderClass } from "@/types/componentTypes";

interface IProps {
  children: React.ReactNode;
  classeHeader: HeaderClass;
}

const Header = ({ children, classeHeader: classe }: IProps) => {
  return <HeaderStyle $classHeader={classe}>{children}</HeaderStyle>;
};

export default Header;
