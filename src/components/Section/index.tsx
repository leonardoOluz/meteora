import { SectionStyleKeys } from "@/types/componentTypes";
import { SectionStyle } from "./styles";

interface IProps {
  children: React.ReactNode;
  classNameSection?: SectionStyleKeys;
}
const Section = ({ children, classNameSection }: IProps) => {
  return (
    <SectionStyle
      $classNameSection={classNameSection}
      aria-label={classNameSection}
      id={classNameSection}
    >
      {children}
    </SectionStyle>
  );
};

export default Section;
