import { swiperStyles } from "@/styles/stylesGlobal";
import styled from "styled-components";
import { Swiper } from "swiper/react";

export const CarroselSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  ${swiperStyles}
`;
