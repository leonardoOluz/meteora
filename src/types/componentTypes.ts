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
export type InputStyles = "inputBuscador" | "inputModalProduto" | "inputForm" | "inputNewsLetter";
export type IClassTypograph =
  | "paragraph"
  | "basicParagraphBold"
  | "basicParagraphSmall"
  | "basicHeadingH3"
  | "basicHeadingH2"
  | "basicHendingH4"
  | "basicParagraphLead"
  | "typographyModal";

/* classes das imagens */
export type IClassImg =
  | "imgBanner"
  | "imgCategoria"
  | "imgFacilidades"
  | "imgProdutoCard"
  | "imgCarrinho"
  | "imgNossasLojas"
  | "imgNovidades";

/* className section */
// Type com os valores em string, igual ao aria-label
export type SectionStyleKeys =
  | "secao categorias"
  | "secao produtos"
  | "secao facilidades"
  | "secao newsletter"
  | "secao carrinho"
  | "secao promocoes"
  | "secao banner"
  | "secao nossas lojas"
  | "secao novidades"
  | "secao produtos buscados"
  | "secao login"
  | "secao pagamento"
  | "secao pagina nao encontrada";

export type ILista =
  | "listaCategorias"
  | "listaFelicidades"
  | "listaProdutos"
  | "listaCarrinho"
  | "listSelectedModal"
  | "listPromocoes"
  | "listNossasLojas"
  | "listSummary";

export type IHeader = "header" | "headerModal" | "headerDropDown" | "headerCheckout";
export type FormClass = "formBasic" | "formSelectedModal" | "formAddress" | "formProductModal";
export type IButton =
  | "btnPrimary"
  | "btnSecundary"
  | "btnTerciario"
  | "btnQuarciario"
  | "btnUnset"
  | "btnModalClose";
export type ICardProduto = (typeof produtos.produtos)[0];
export type IKeyIdProduct = (typeof produtos.produtos)[0] extends {
  id: infer U;
}
  ? U
  : never;
export type ICardBanner = (typeof banner.banner)[0];
export type ICardCategoria = (typeof categorias.categorias)[0];
export type ICardFacilidades = (typeof facilidades.facilidades)[0];
export type catPromocao =
  | 0.15
  | 0.2
  | 0.25
  | 0.3
  | 0.35
  | 0.4
  | 0.45
  | 0.5
  | 0.75
  | 0.9
  | number;
