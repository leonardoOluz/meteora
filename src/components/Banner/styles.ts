import { Swiper } from "swiper/react";
import styled from "styled-components";

export const BannerSwiperContainer = styled(Swiper)`
  /* Adicione aqui os estilos específicos do container do Swiper, se necessário */
  .swiper-pagination-bullet {
    width: 3rem;
    height: 0.3rem;
    background-color: #ccc;
    display: inline-block;
    margin: 0 5px;
    border-radius: 0.2rem;
    opacity: 0.4;
  }
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colorsPrimary.branco};
    opacity: 1;
  }
  .swiper-button-next {
    &::after {
      content: url("/assets/paths/PathRight.png");
    }
  }
  .swiper-button-prev {
    &::after {
      content: url("/assets/paths/PathLeft.png");
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.colorsPrimary.branco};
  }
`;

export const BannerCartContainer = styled.div`
  width: 100%;
  display: flex;
`;
