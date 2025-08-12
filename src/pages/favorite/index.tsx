import CardProduto from "@/components/CardProduto";
import List from "@/components/List";
import ItemList from "@/components/List/ItemList";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { selectProductForFavorite } from "@/store/selectors/itemSelectors";
import { thema } from "@/styles/thema";
import { RootState } from "@/types/store";
import { useSelector } from "react-redux";

const Favorite = () => {
  const produtos = useSelector((state: RootState) => {
    return selectProductForFavorite(state)
  })
  
  return (
    <Section classNameSection="secao produtos">
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
    </Section>
  );
};

export default Favorite;
