import CardProduto from "@/components/CardProduto";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { thema } from "@/styles/thema";
import DivCatPromo from "./DivCatPromo";
import Carousel from "@/components/Carousel";
import { SwiperOptions } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";
import useSlidesPerView from "@/hooks/useSlidesPerView";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import useSelectColorPromo from "@/hooks/useSelectColorPromo";
import Facilidades from "@/components/Facilidades";
import NewsLetter from "@/components/NewsLetter";
import { selectProductForSearch } from "@/store/selectors/itemSelectors";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearBuscador } from "@/store/reducers/buscador";

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
  const dispatch = useDispatch();
  const { slidesPerView } = useSlidesPerView();
  const promocoes = useSelector((state: RootState) => state.promocoes);
  const produtos = useSelector((state: RootState) => {
    return selectProductForSearch(state, "descricao");
  });
  const { handleIsValuePromoIsColor } = useSelectColorPromo();
  useEffect(() => {
    dispatch(clearBuscador());
  }, [dispatch]);

  return (
    <>
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
            isColor={handleIsValuePromoIsColor(itemPromo.catPromocao)}
          >
            <Carousel
              {...swiperSettings}
              slidesPerView={slidesPerView}
              itens={produtos.filter((itemFilter) =>
                itemPromo.productId.some((idPromo) => idPromo === itemFilter.id)
              )}
              renderItem={(itemProduct) => {
                return <CardProduto card={itemProduct} />;
              }}
            />
          </DivCatPromo>
        ))}
      </Section>
      <Facilidades />
      <NewsLetter />
    </>
  );
};

export default Promocoes;
