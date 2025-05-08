import { Swiper } from "swiper/react";
import styled from "styled-components";
import { swiperStyles } from "@/styles/stylesGlobal";

export const BannerSwiperContainer = styled(Swiper)`
  ${swiperStyles}
`;

export const BannerCartContainer = styled.div`
  width: 100%;
  display: flex;
`;
