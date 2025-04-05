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
const FotoStyles = styled.img<{
  $classe: "imgBanner" | "imgCategoria" | "imgFacilidades";
}>`
  object-fit: cover;

  ${({ $classe }) => {
    switch ($classe) {
      case "imgBanner":
        return imgBanner;
      case "imgCategoria":
        return imgCategoria;
      case "imgFacilidades":
        return imgFacilidades;
      default:
        return "";
    }
  }}
`;
interface IProps {
  photo: string;
  alt: string;
  classe: "imgBanner" | "imgCategoria" | "imgFacilidades";
}
const Photo = ({ alt, photo, classe }: IProps) => {
  return <FotoStyles src={photo} alt={alt} $classe={classe} />;
};

export default Photo;
