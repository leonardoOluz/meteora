import Typography from "@components/Typography";
import CardCategoria from "./CardCategoria";
import Photo from "@components/Photo";
import useSetImagens from "@/hooks/useSetImagens";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import { Link } from "react-router-dom";
import { thema } from "@/styles/thema";
import List from "../List";
import ItemList from "../List/ItemList";
import { DivCategorias } from "./styles";
import { useDispatch } from "react-redux";
import { clearBuscador } from "@/store/reducers/buscador";

const Categorias = () => {
  const { imagensCategoria } = useSetImagens();
  const categorias = useSelector((state: RootState) => state.categorias);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearBuscador());
  };

  return (
    <DivCategorias id="categorias" aria-label="selecao de categorias">
      <Typography
        elementoHtml="h2"
        classNameTypograph="basicHeadingH3"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        Busque por categoria:
      </Typography>
      <List
        aria-labelledby="categorias"
        classeLista="listaCategorias"
        aria-label="Lista de categorias"
      >
        {categorias.map((item) => (
          <ItemList key={item.id}>
            <Link
              replace
              to={`/categoria/${item.categoria}`}
              onClick={handleClick}
            >
              <CardCategoria texto={item.categoria}>
                <Photo
                  src={imagensCategoria(item.imagem)}
                  alt={item.categoria}
                  classeImg="imgCategoria"
                />
              </CardCategoria>
            </Link>
          </ItemList>
        ))}
      </List>
    </DivCategorias>
  );
};

export default Categorias;
