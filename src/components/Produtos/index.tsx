import CardProduto from "@/components/CardProduto";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { thema } from "@/styles/thema";
import { RootState } from "@/types/store";
import { useSelector } from "react-redux";
import List from "../List";
import ItemList from "../List/ItemList";
import Categorias from "../Categorias";
import { selectProductForSearch } from "@/store/selectors/itemSelectors";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearBuscador } from "@/store/reducers/buscador";

const Produtos = () => {
  const dispatch = useDispatch();
  
  const produtos = useSelector((state: RootState) => {
    return selectProductForSearch(state, "titulo");
  });

  useEffect(() => {
    dispatch(clearBuscador());
  }, [dispatch]);

  return (
    <Section classNameSection="secao produtos">
      <Categorias />
      <Typography
        elementoHtml="h2"
        classNameTypograph="basicHeadingH3"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        Produtos que estão bombando!
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

export default Produtos;
