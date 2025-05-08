import { SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import "swiper/swiper-bundle.css";
import { CarroselSwiper } from "./styles";

interface ICarouselProps<T> extends SwiperOptions {
  itens: T[];
  renderItem: (item: T) => React.ReactNode;
}

const Carousel = <T,>({ itens, renderItem, ...rest }: ICarouselProps<T>) => {
  return (
    <CarroselSwiper
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      {...rest}
    >
      {itens.map((item, index) => (
        <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
      ))}
    </CarroselSwiper>
  );
};

export default Carousel;
