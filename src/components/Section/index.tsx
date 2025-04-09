import { IClassSection } from "@/interface/IU";
import { SectionStyle } from "./styles";

interface IProps {
  children: React.ReactNode;
  classNameSection?: IClassSection;
}
const Section = ({ children, classNameSection }: IProps) => {
  return <SectionStyle  $classNameSection={classNameSection}>{children}</SectionStyle>;
};

export default Section;
