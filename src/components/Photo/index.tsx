import { IClassImg } from "@/types/componentTypes";
import { FotoStyles } from "./styles";

interface IProps {
  photo: string;
  alt: string;
  classeImg: IClassImg;
}
const Photo = ({ alt, photo, classeImg }: IProps) => {
  return <FotoStyles src={photo} alt={alt} $classeImg={classeImg} />;
};

export default Photo;
