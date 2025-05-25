import { IClassSection } from "@/types/componentTypes";
import { SectionStyle } from "./styles";

interface IProps {
  children: React.ReactNode;
  classNameSection?: IClassSection;
}
const Section = ({ children, classNameSection }: IProps) => {
  return (
    <SectionStyle
      $classNameSection={classNameSection}
      aria-label={classNameSection}
    >
      {children}
    </SectionStyle>
  );
};

export default Section;
