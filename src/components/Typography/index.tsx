import { IClassTypograph, IGrid, ITag } from "@/types/componentTypes";
import { TypographyStyle } from "./styles";

interface IProps  extends React.HTMLAttributes<HTMLDivElement>{
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
  ...rest
}: IProps) => {
  return (
    <TypographyStyle
      as={elementoHtml}
      $classNameTypograph={classNameTypograph}
      $isColor={isColor}
      $isGrid={isGrid}
      {...rest}
    >
      {children}
    </TypographyStyle>
  );
};

export default Typography;
