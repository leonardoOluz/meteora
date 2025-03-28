import banner from "./banner.json";
import useResize from "@/hooks/useResize";
import { thema } from "@/styles/thema";
import transformNumber from "@/hooks/utils/transformNumber";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FotoStyles, StyledSwiperContainer } from "./styles";
import { SwiperOptions } from "swiper/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperSettings: SwiperOptions = {
  modules: [Navigation, Pagination, Autoplay],
  spaceBetween: 0,
  slidesPerView: 1,
  scrollbar: { draggable: true },
  navigation: true,
  pagination: {
    clickable: true,
  },
  autoplay: {
    delay: 3500,
  },
};

type imagensBanner = (typeof banner.banner)[0];

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
          <FotoStyles src={imagemAtual(foto)} alt={foto.alt} />
        </SwiperSlide>
      ))}
    </StyledSwiperContainer>
  );
};

export default Banner;
