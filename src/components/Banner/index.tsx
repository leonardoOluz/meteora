import banner from "@/json/banner.json";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { StyledSwiperContainer } from "./styles";
import { SwiperOptions } from "swiper/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Photo from "../Photo";
import useSetImagens from "@/hooks/useSetImagens";

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

const Banner = () => {
  const { imagensBanner } = useSetImagens();

  return (
    <StyledSwiperContainer {...swiperSettings}>
      {banner.banner.map((item) => (
        <SwiperSlide key={item.id}>
          <Photo photo={imagensBanner(item.imagem)} alt={item.alt} classeImg={"imgBanner"}/>
        </SwiperSlide>
      ))}
    </StyledSwiperContainer>
  );
};

export default Banner;
