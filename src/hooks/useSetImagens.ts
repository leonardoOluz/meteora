import transformNumber from "@/utils/transformNumber";
import { thema } from "@/styles/thema";
import useResize from "./useResize";

export default function useSetImagens() {
  const { width } = useResize();
  const imagensBanner = (imagemBanner: string): string => {
    return width < transformNumber(thema.breakpoints.tablet)
      ? `/assets/mobile/banner/${imagemBanner}.png`
      : width < transformNumber(thema.breakpoints.desktop)
      ? `/assets/tablet/banner/${imagemBanner}.png`
      : `/assets/desktop/banner/${imagemBanner}.png`;
  };
  const imagesCartBanner = (): string => {
    return width < transformNumber(thema.breakpoints.tablet)
      ? "/assets/bannerCarrinho/BannerCarrinhoMobile.svg"
      : width > transformNumber(thema.breakpoints.tablet)
      ? "/assets/bannerCarrinho/BannerCarrinhoTablet.svg"
      : "/assets/bannerCarrinho/BannerCarrinhoDesktop.svg";
  };
  const imagensCategoria = (imagemCategoria: string) => {
    return width < transformNumber(thema.breakpoints.tablet)
      ? `/assets/mobile/categorias/${imagemCategoria}.png`
      : width < transformNumber(thema.breakpoints.desktop)
      ? `/assets/tablet/categorias/${imagemCategoria}.png`
      : `/assets/desktop/categorias/${imagemCategoria}.png`;
  };
  const imagensFacilidades = (imagemFacilidades: string) => {
    return width < transformNumber(thema.breakpoints.tablet)
      ? `/assets/mobile/facilidades/${imagemFacilidades}.png`
      : width > transformNumber(thema.breakpoints.tablet)
      ? `/assets/tablet/facilidades/${imagemFacilidades}.png`
      : `/assets/desktop/facilidades/${imagemFacilidades}.png`;
  };
  const imagensCardProdutos = (imagemProduto: string) => {
    return width < transformNumber(thema.breakpoints.tablet)
      ? `/assets/mobile/cards/${imagemProduto}.png`
      : width < transformNumber(thema.breakpoints.desktop)
      ? `/assets/tablet/cards/${imagemProduto}.png`
      : `/assets/desktop/cards/${imagemProduto}.png`;
  };

  return {
    imagensBanner,
    imagensCategoria,
    imagensFacilidades,
    imagensCardProdutos,
    imagesCartBanner,
  };
}
