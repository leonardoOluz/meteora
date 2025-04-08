import { IClassTypograph, IGrid, ITag } from "@/interface/IU";
import { TypographyStyle } from "./styles";

interface IProps {
  children: React.ReactNode;
  elementoHtml: ITag;
  classTypograph: IClassTypograph;
  isColor?: string;
  isGrid?: IGrid;
}

const Typography = ({
  elementoHtml,
  children,
  classTypograph,
  isColor,
  isGrid,
}: IProps) => {
  return (
    <TypographyStyle
      as={elementoHtml}
      $classTypograph={classTypograph}
      $isColor={isColor}
      $isGrid={isGrid}
    >
      {children}
    </TypographyStyle>
  );
};

export default Typography;
