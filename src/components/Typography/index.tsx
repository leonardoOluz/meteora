import { TypographyStyle } from "./styles";

interface IProps {
  children: React.ReactNode;
  elementoHtml: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  nameClass:
    | "paragraph"
    | "basicParagraphBold"
    | "basicParagraphSmall"
    | "basicHeadingH3"
    | "basicHeadingH2";
}

const Typography = ({ elementoHtml, children, nameClass }: IProps) => {
  return (
    <TypographyStyle as={elementoHtml} $nameClass={nameClass}>
      {children}
    </TypographyStyle>
  );
};

export default Typography;
