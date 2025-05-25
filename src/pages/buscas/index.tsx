import CardProduto from "@/components/CardProduto";
import Facilidades from "@/components/Facilidades";
import List from "@/components/List";
import ItemList from "@/components/List/ItemList";
import NewsLetter from "@/components/NewsLetter";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { selectProductForSearch } from "@/store/selectors/itemSelectors";
import { thema } from "@/styles/thema";
import { RootState } from "@/types/store";
import { useSelector } from "react-redux";

const Busca = () => {
  const cardsSearchProducts = useSelector((state: RootState) => {
    return selectProductForSearch(state, "titulo");
  });
  const checkIfProducts =
    cardsSearchProducts.length > 0
      ? "O que você está buscando?"
      : "Nenhum produto encontrado";

  return (
    <>
      <Section classNameSection="secao produtos buscados">
        <Typography
          elementoHtml="h2"
          classNameTypograph="basicHeadingH3"
          isColor={thema.colorsPrimary.cinzaChumbo}
        >
          {checkIfProducts}
        </Typography>
        <List
          aria-label={`Lista de produtos por busca`}
          classeLista="listaProdutos"
        >
          {cardsSearchProducts.map((card) => (
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

export default Busca;
