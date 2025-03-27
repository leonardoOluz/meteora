import banner from "./banner.json";
import useResize from "@/hooks/useResize";
import { thema } from "@/styles/thema";
import transformNumber from "@/hooks/utils/transformNumber";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FotoStyles, StyledSwiperContainer } from "./styles";
import { SwiperOptions } from "swiper/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import styled from "styled-components";
import Typography from "../Typography";

const swiperSettings: SwiperOptions = {
  modules: [Navigation, Pagination, Autoplay],
  spaceBetween: 0,
  slidesPerView: 1,
  scrollbar: { draggable: true },
  navigation: true,
  pagination: {
    clickable: true,
  },
  // autoplay: {
  //   delay: 5000,
  // },
};

type imagensBanner = (typeof banner.banner)[0];

const FigureStyle = styled.figure`
  margin: 0;
  width: 100%;
  position: relative;
`;
const FiguCaptionStyles = styled.figcaption`
  position: absolute;
  top: 60%;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Banner = () => {
  const { width } = useResize();
  const imagemAtual = (imagens: imagensBanner): string => {
    return width < transformNumber(thema.breakpoints.tablet)
      ? imagens.fotoMobile
      : width < transformNumber(thema.breakpoints.desktop)
      ? imagens.fotoTablet
      : imagens.fotoDesktop;
  };

  return (
    <StyledSwiperContainer {...swiperSettings}>
      {banner.banner.map((foto) => (
        <SwiperSlide key={foto.id}>
          <FigureStyle>
            <FotoStyles src={imagemAtual(foto)} alt={foto.alt} />
            <FiguCaptionStyles>
              <Typography elementoHtml="h3" nameClass="displayFour">
                COLEÇÃO ATEMPORAL
              </Typography>
              <Typography elementoHtml="p" nameClass="paragraph">
                Estilo e qualidade para durar.{" "}
              </Typography>
            </FiguCaptionStyles>
          </FigureStyle>
        </SwiperSlide>
      ))}
    </StyledSwiperContainer>
  );
};

export default Banner;
