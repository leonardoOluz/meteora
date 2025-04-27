import { HeaderStyle } from "./styles";
import { IHeader } from "@/types/componentTypes";

interface IProps {
  children: React.ReactNode;
  classeHeader: IHeader;
}

const Header = ({ children, classeHeader: classe }: IProps) => {
  return <HeaderStyle $classHeader={classe}>{children}</HeaderStyle>;
};

export default Header;
