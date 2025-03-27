import { TypographyStyle } from "./styles";

interface IProps {
  children: React.ReactNode;
  elementoHtml: "p" | "h1" | "h2" | "h3";
  nameClass: "displayFour" | "paragraph";
}

const Typography = ({ elementoHtml, children, nameClass }: IProps) => {
  return (
    <TypographyStyle as={elementoHtml} $nameClass={nameClass}>
      {children}
    </TypographyStyle>
  );
};

export default Typography;
