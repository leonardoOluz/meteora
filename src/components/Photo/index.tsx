import { IClassImg } from "@/types/componentTypes";
import styled from "styled-components";
import {
  imgBanner,
  imgCategoria,
  imgFacilidades,
  imgProdutoCard,
} from "./styles";

const objClasseImg = {
  imgBanner,
  imgCategoria,
  imgFacilidades,
  imgProdutoCard,
};

const FotoStyles = styled.img<{
  $classeImg: IClassImg;
}>`
  object-fit: cover;
  ${({ $classeImg }) => objClasseImg[$classeImg]}
`;
interface IProps {
  photo: string;
  alt: string;
  classeImg: IClassImg;
}
const Photo = ({ alt, photo, classeImg }: IProps) => {
  return <FotoStyles src={photo} alt={alt} $classeImg={classeImg} />;
};

export default Photo;
