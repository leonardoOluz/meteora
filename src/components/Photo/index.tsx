import styled, { css } from "styled-components";

const imgBanner = css`
  width: 100%;
`;

const imgCategoria = css`
  margin: 0;
  width: 14.6rem;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 21.1rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 16rem;
  }
`;

const FotoStyles = styled.img<{ $classe: "imgBanner" | "imgCategoria" }>`
  object-fit: cover;

  ${({ $classe }) => {
    switch ($classe) {
      case "imgBanner":
        return imgBanner;
      case "imgCategoria":
        return imgCategoria;
      default:
        return "";
    }
  }}
`;

interface IProps {
  photo: string;
  alt: string;
  classe: "imgBanner" | "imgCategoria";
}
const Photo = ({ alt, photo, classe }: IProps) => {
  return <FotoStyles src={photo} alt={alt} $classe={classe} />;
};

export default Photo;
