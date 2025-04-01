import useResize from "./useResize";
import banner from "@/json/banner.json";
import categorias from "@/json/categorias.json";
import transformNumber from "@/utils/transformNumber";
import { thema } from "@/styles/thema";

type imagensBanner = (typeof banner.banner)[0];
type imagensCategoria = (typeof categorias.categorias)[0];

export default function useSetImagens() {
  const { width } = useResize();
  const imagensBanner = (imagens: imagensBanner): string => {
    return width < transformNumber(thema.breakpoints.tablet)
      ? imagens.fotoMobile
      : width < transformNumber(thema.breakpoints.desktop)
      ? imagens.fotoTablet
      : imagens.fotoDesktop;
  };
  const imagensCategoria = (imagens: imagensCategoria) => {
    return width < transformNumber(thema.breakpoints.tablet)
      ? `/public/assets/mobile/categorias/Categoria ${imagens.imagem}.png`
      : width < transformNumber(thema.breakpoints.desktop) ||
        width > transformNumber(thema.breakpoints.tablet)
      ? `/public/assets/tablet/categorias/Categoria ${imagens.imagem}.png`
      : `/public/assets/desktop/categorias/Categoria ${imagens.imagem}.png`;
  };
  return {
    imagensBanner,
    imagensCategoria,
  };
}
