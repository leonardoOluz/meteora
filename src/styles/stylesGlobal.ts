import { IGrid } from "@/types/componentTypes";
import { css } from "styled-components";
/* Estilos da Typography */
export const paragraph = css`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.3rem;
  text-align: center;
`;
export const basicParagraphBold = (isGrid?: IGrid) => css`
  ${!!isGrid && `grid-area: ${isGrid};`}
  margin: 0;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.3rem;
`;
export const basicParagraphSmall = (isGrid?: IGrid) => css`
  ${!!isGrid && `grid-area: ${isGrid};`}
  margin: 0;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 2rem;
`;
export const basicHeadingH3 = css`
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 100%;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 3.2rem;
  }
`;
export const basicHeadingH5 = css`
  font-size: 2rem;
  font-weight: 500;
`;
export const basicHeadingH2 = css`
  margin: 0;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 2.9rem;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3.2rem;
  }
`;
export const basicHendingH4 = css`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 100%;
`;
export const basicParagraphLead = css`
  font-weight: 400;
  font-size: 2rem;
  line-height: 100%;
`;
export const typographyModal = css`
  font-size: 2rem;
  font-weight: 500;
  line-height: 100%;
`;
export const basicParagraphSmallBold = css`
  font-size: 1.3rem;
  line-height: 2rem;
  font-weight: 700;
`;
export const swiperStyles = css`
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
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