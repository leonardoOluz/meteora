import CardProduto from "@/components/CardProduto";
import Section from "@components/Section";
import Typography from "@components/Typography";
import List from "@/components/List";
import ItemList from "@/components/List/ItemList";
import Categorias from "@/components/Categorias";
import NewsLetter from "@/components/NewsLetter";
import Facilidades from "@/components/Facilidades";
import useScroll from "@/hooks/useScroll";
import { selectProductCat } from "@/store/selectors/itemSelectors";
import { thema } from "@/styles/thema";
import { RootState } from "@/types/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Categoria = () => {
  const { categoria } = useParams();
   const scrollIntoView = useScroll();
  const cardCategoria = useSelector((state: RootState) => {
    return selectProductCat(state, categoria);
  });

  useEffect(() => {
    scrollIntoView(`titleListProducts-${categoria}`);
  }, [categoria, scrollIntoView]);

  return (
    <>
      <Section classNameSection="secao categorias">
        <Categorias />
        <Typography
          elementoHtml="h2"
          classNameTypograph="basicHeadingH3"
          isColor={thema.colorsPrimary.cinzaChumbo}
          id={`titleListProducts-${categoria}`}
        >
          {categoria}
        </Typography>
        <List
          aria-label={`Lista de produtos da categoria ${categoria}`}
          classeLista="listaProdutos"
        >
          {cardCategoria.map((card) => (
            <ItemList key={card.id}>
              <CardProduto card={card} />
            </ItemList>
          ))}
        </List>
      </Section>
      <Facilidades />
      <NewsLetter />
    </>
  );
};

export default Categoria;
