import produtos from "@/json/produtos.json";
import banner from "@/json/banner.json";
import categorias from "@/json/categorias.json";
import facilidades from "@/json/facilidades.json";

/* grid, tag e nameClass dos Typography */
export type IGrid =
  | "tituloFacilidades"
  | "descricaoFacilidades"
  | "spanProduto"
  | "descricaoProduto"
  | false;
export type ITag = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type IClassTypograph =
  | "paragraph"
  | "basicParagraphBold"
  | "basicParagraphSmall"
  | "basicHeadingH3"
  | "basicHeadingH2"
  | "basicParagraphLead";

/* classes das imagens */
export type IClassImg =
  | "imgBanner"
  | "imgCategoria"
  | "imgFacilidades"
  | "imgProdutoCard";

/* className section */
export type IClassSection =
  | "secaoCategorias"
  | "secaoProdutos"
  | "secaoFacilidades"
  | "secaoNewsLetter";

export type ILista = "listaCategorias" | "listaFelicidades" | "listaProdutos";
export type ICardProduto = typeof produtos.produtos[0];
export type ICardBanner = (typeof banner.banner)[0];
export type ICardCategoria = (typeof categorias.categorias)[0];
export type ICardFacilidades = (typeof facilidades.facilidades)[0];