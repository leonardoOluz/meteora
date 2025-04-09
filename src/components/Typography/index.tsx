import { IClassTypograph, IGrid, ITag } from "@/interface/IU";
import { TypographyStyle } from "./styles";

interface IProps {
  children: React.ReactNode;
  elementoHtml: ITag;
  classNameTypograph: IClassTypograph;
  isColor?: string;
  isGrid?: IGrid;
}

const Typography = ({
  elementoHtml,
  children,
  classNameTypograph,
  isColor,
  isGrid,
}: IProps) => {
  return (
    <TypographyStyle
      as={elementoHtml}
      $classNameTypograph={classNameTypograph}
      $isColor={isColor}
      $isGrid={isGrid}
    >
      {children}
    </TypographyStyle>
  );
};

export default Typography;
