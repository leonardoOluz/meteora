import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { BannerCartContainer, BannerSwiperContainer } from "./styles";
import { SwiperOptions } from "swiper/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Photo from "../Photo";
import useSetImagens from "@/hooks/useSetImagens";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import Section from "../Section";
import { Link } from "react-router-dom";

const swiperSettings: SwiperOptions = {
  modules: [Navigation, Pagination, Autoplay],
  spaceBetween: 0,
  slidesPerView: 1,
  scrollbar: { draggable: true },
  navigation: true,
  pagination: {
    clickable: true,
  },
};
interface IProps {
  typeBanner: "bannerSwiper" | "bannerCart";
}
const Banner = ({ typeBanner }: IProps) => {
  const { imagensBanner, imagesCartBanner } = useSetImagens();
  const banner = useSelector((state: RootState) => state.banner);
  if (typeBanner === "bannerCart") {
    return (
      <BannerCartContainer aria-label="banner carrinho">
        <Photo
          src={imagesCartBanner()}
          alt="banner-carrinho"
          classeImg="imgBanner"
        />
      </BannerCartContainer>
    );
  }
  return (
    <Section classNameSection="secao banner">
      <BannerSwiperContainer {...swiperSettings}>
        {banner.map((item) => (
          <SwiperSlide key={item.id}>
            <Link style={{ width: "100%" }} to="/novidades">
              <Photo
                title="banner carrossel de promoções"
                src={imagensBanner(item.imagem)}
                alt={item.alt}
                classeImg={"imgBanner"}
              />
            </Link>
          </SwiperSlide>
        ))}
      </BannerSwiperContainer>
    </Section>
  );
};

export default Banner;
