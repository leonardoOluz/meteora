import Section from "@components/Section";
import Typography from "@components/Typography";
import Lista from "@/components/LIsta";
import Item from "@/components/LIsta/Item";
import CardCategoria from "./CardCategoria";
import Photo from "@components/Photo";
import useSetImagens from "@/hooks/useSetImagens";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";

const Categoria = () => {
  const { imagensCategoria } = useSetImagens();
  const categorias = useSelector((state: RootState) => state.categorias);
  return (
    <Section classNameSection="secaoCategorias">
      <Typography elementoHtml="h2" classNameTypograph="basicHeadingH3">
        Busque por categoria:
      </Typography>
      <Lista classe="listaCategorias" ariaLabel="Lista de categorias">
        {categorias.map((item) => (
          <Item key={item.id}>
            <CardCategoria texto={item.categoria}>
              <Photo
                photo={imagensCategoria(item.imagem)}
                alt={item.categoria}
                classeImg="imgCategoria"
              />
            </CardCategoria>
          </Item>
        ))}
      </Lista>
    </Section>
  );
};

export default Categoria;
