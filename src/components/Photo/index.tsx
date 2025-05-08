import { IClassImg } from "@/types/componentTypes";
import { FotoStyles } from "./styles";

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  classeImg: IClassImg;
}
const Photo = ({ classeImg, ...rest }: IProps) => {
  return <FotoStyles $classeImg={classeImg} {...rest} />;
};

export default Photo;
