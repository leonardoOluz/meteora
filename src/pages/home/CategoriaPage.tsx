import CardProduto from "@/components/CardProduto";
import Section from "@components/Section";
import Typography from "@components/Typography";
import { selectProdutosPorCategoria } from "@/store/selectors/itemSelectors";
import { thema } from "@/styles/thema";
import { RootState } from "@/types/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Lista from "@/components/LIsta";
import Item from "@/components/LIsta/Item";

const CategoriaPage = () => {
  const { categoria } = useParams();
  const cardCategoria = useSelector((state: RootState) => {
    return selectProdutosPorCategoria(state, categoria);
  });
  return (
    <>
      <Section classNameSection="secao-produtos">
        <Typography
          elementoHtml="h2"
          classNameTypograph="basicHeadingH3"
          isColor={thema.colorsPrimary.cinzaChumbo}
        >
          {categoria}
        </Typography>
        <Lista
          ariaLabel={`Lista de produtos da categoria ${categoria}`}
          classeLista="listaProdutos"
        >
          {cardCategoria.map((card) => (
            <Item key={card.id}>
              <CardProduto card={card} />
            </Item>
          ))}
        </Lista>
      </Section>
    </>
  );
};

export default CategoriaPage;
