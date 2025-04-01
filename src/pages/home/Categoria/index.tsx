import categorias from "@/json/categorias.json";
import Figure from "@components/Figure";
import Photo from "@components/Photo";
import useSetImagens from "@/hooks/useSetImagens";
import Typography from "@components/Typography";
import Section from "@components/Section";
import Lista from "@/components/LIsta";
import Item from "@/components/LIsta/Item";

const Categoria = () => {
  const { imagensCategoria } = useSetImagens();
  return (
    <Section classe="categoria">
      <Typography elementoHtml="h3" nameClass="titleHeading">
        Busque por categoria:
      </Typography>
      <Lista>
        {categorias.categorias.map((item) => (
          <Item key={item.id}>
            <Figure texto={item.categoria}>
              <Photo
                photo={imagensCategoria(item)}
                alt={item.categoria}
                classe="imgCategoria"
              />
            </Figure>
          </Item>
        ))}
      </Lista>
    </Section>
  );
};

export default Categoria;
