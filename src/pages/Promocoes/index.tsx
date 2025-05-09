import CardProduto from "@/components/CardProduto";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { thema } from "@/styles/thema";
// import cardProdutos from "@/json/produtos.json";
import DivCatPromo from "./DivCatPromo";
import Carousel from "@/components/Carousel";
import { SwiperOptions } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";
import useSlidesPerView from "@/hooks/useSlidesPerView";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";

const swiperSettings: SwiperOptions = {
  modules: [Navigation, Pagination],
  spaceBetween: 10,
  scrollbar: { draggable: true },
  navigation: true,
  pagination: {
    clickable: true,
  },
};

const Promocoes = () => {
  const { slidesPerView } = useSlidesPerView();
  const promocoes = useSelector((state: RootState) => state.promocoes);
  const produtos = useSelector((state: RootState) => state.produtos);

  return (
    <Section classNameSection="secao promocoes">
      <Typography
        elementoHtml="h2"
        classNameTypograph="basicHeadingH3"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        Confira nossas promoções
      </Typography>

      {promocoes.map((itemPromo) => (
        <DivCatPromo
          key={itemPromo.catPromocao}
          value={itemPromo.catPromocao}
          isColor={thema.colorsPrimary.laranja} // tratar cores
        >
          <Carousel
            {...swiperSettings}
            slidesPerView={slidesPerView}
            itens={produtos.filter((itemFilter) =>
              itemPromo.productId.some((idPromo) => idPromo === itemFilter.id)
            )}
            renderItem={(itemProduct) => {
              return <CardProduto card={itemProduct} valueCatPromo={itemPromo.catPromocao} />;
            }}
          />
        </DivCatPromo>
      ))}

      {/* <DivCatPromo value={promocoes[4].catPromocao} isColor={thema.colorsPrimary.laranja}>
        <Carousel
          {...swiperSettings}
          slidesPerView={slidesPerView}
          itens={cardProdutos.produtos.slice(0, 4)}
          renderItem={(item) => {
            return <CardProduto card={item} valueCatPromo={0.5}/>;
          }}
        />
      </DivCatPromo>

      <DivCatPromo value={0.3} isColor={thema.colorsPrimary.coral}>
        <Carousel
          {...swiperSettings}
          slidesPerView={slidesPerView}
          itens={cardProdutos.produtos.slice(0, 4)}
          renderItem={(item) => {
            return <CardProduto card={item} valueCatPromo={0.3} />;
          }}
        />
      </DivCatPromo>

      <DivCatPromo value={0.15} isColor={thema.colorsPrimary.verde}>
        <Carousel
          {...swiperSettings}
          slidesPerView={slidesPerView}
          itens={cardProdutos.produtos.slice(0, 4)}
          renderItem={(item) => {
            return <CardProduto card={item} valueCatPromo={0.15}/>;
          }}
        />
      </DivCatPromo> */}
    </Section>
  );
};

export default Promocoes;
