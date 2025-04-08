import { IClassImg } from "@/interface/IU";
import styled, { css } from "styled-components";

const imgBanner = css`
  width: 100%;
`;
const imgCategoria = css`
  max-width: 14.6rem;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;
const imgFacilidades = css`
  grid-area: imagenFacilidades;
`;
const imgProdutoCard = css`
`;
const FotoStyles = styled.img<{
  $classeImg: IClassImg;
}>`
  object-fit: cover;

  ${({ $classeImg }) => {
    switch ($classeImg) {
      case "imgBanner":
        return imgBanner;
      case "imgCategoria":
        return imgCategoria;
      case "imgFacilidades":
        return imgFacilidades;
      case "imgProdutoCard":
        return imgProdutoCard;
      default:
        break;
    }
  }}
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
