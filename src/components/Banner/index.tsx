import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { BannerCartContainer, BannerSwiperContainer } from "./styles";
import { SwiperOptions } from "swiper/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Photo from "../Photo";
import useSetImagens from "@/hooks/useSetImagens";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import bannerCartMobile from "./assets/bannerCarrinho/BannerCarrinhoMobile.svg";
import bannerCartDesktop from "./assets/bannerCarrinho/BannerCarrinhoDesktop.svg";
import bannerCartTablet from "./assets/bannerCarrinho/BannerCarrinhoTablet.svg";
import useResize from "@/hooks/useResize";
import transformNumber from "@/utils/transformNumber";
import { thema } from "@/styles/thema";

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

interface IProps {
  typeBanner: "bannerSwiper" | "bannerCart";
}

const Banner = ({ typeBanner }: IProps) => {
  const { imagensBanner } = useSetImagens();
  const banner = useSelector((state: RootState) => state.banner);
  const { width } = useResize();

  if (typeBanner === "bannerCart") {
    return (
      <BannerCartContainer aria-label="banner carrinho">
        <Photo
          photo={
            width < transformNumber(thema.breakpoints.tablet)
              ? bannerCartMobile
              : width > transformNumber(thema.breakpoints.tablet)
              ? bannerCartTablet
              : bannerCartDesktop
          }
          alt="banner-carrinho"
          classeImg="imgBanner"
        />
      </BannerCartContainer>
    );
  }

  return (
    <section
      aria-label="banner de carrossel de promoções"
      title="banner carrossel de promoções"
    >
      <BannerSwiperContainer {...swiperSettings}>
        {banner.map((item) => (
          <SwiperSlide key={item.id}>
            <Photo
              photo={imagensBanner(item.imagem)}
              alt={item.alt}
              classeImg={"imgBanner"}
            />
          </SwiperSlide>
        ))}
      </BannerSwiperContainer>
    </section>
  );
};

export default Banner;
