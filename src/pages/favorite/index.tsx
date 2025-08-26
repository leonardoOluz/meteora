import CardProduto from "@/components/CardProduto";
import CartIsEmpty from "@/components/CartIsEmpty";
import Facilidades from "@/components/Facilidades";
import List from "@/components/List";
import ItemList from "@/components/List/ItemList";
import NewsLetter from "@/components/NewsLetter";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { AppDispatch } from "@/store";
import { fetchGetFavoritosSaga } from "@/store/reducers/favorito";
import { selectProductForFavorite } from "@/store/selectors/itemSelectors";
import { thema } from "@/styles/thema";
import { RootState } from "@/types/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Favorite = () => {
  const produtos = useSelector((state: RootState) => {
    return selectProductForFavorite(state);
  });
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchGetFavoritosSaga());
  }, [dispatch]);

  return (
    <>
      <Section classNameSection="secao produtos">
        {produtos.length === 0 ? (
          <CartIsEmpty emptyType="favorite" />
        ) : (
          <>
            <Typography
              elementoHtml="h2"
              classNameTypograph="basicHeadingH3"
              isColor={thema.colorsPrimary.cinzaChumbo}
              style={{ margin: "2rem" }}
            >
              Meus Favoritos
            </Typography>
            <List classeLista="listaProdutos" aria-label="Lista de produtos">
              {produtos.map((card) => (
                <ItemList
                  key={card.id}
                  aria-label={`card de produto ${card.categoria}`}
                >
                  <CardProduto card={card} />
                </ItemList>
              ))}
            </List>
          </>
        )}
      </Section>
      <Facilidades />
      <NewsLetter />
    </>
  );
};

export default Favorite;
