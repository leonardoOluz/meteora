import Lista from "@/components/LIsta";
import Item from "@/components/LIsta/Item";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import facilidades from "@/json/facilidades.json";
import CardFelicidades from "./CardFelicidades";
import Photo from "@/components/Photo";
import useSetImagens from "@/hooks/useSetImagens";

const Facilidades = () => {
  const { imagensFacilidades } = useSetImagens();
  return (
    <Section classe="secaoFacilidades">
      <Typography
        elementoHtml="h2"
        classTypograph="basicHeadingH2"
      >
        Conheça todas as nossas facilidades
      </Typography>
      <Lista classe="listaFelicidades">
        {facilidades.facilidades.map((item) => (
          <Item key={item.id}>
            <CardFelicidades title={item.title} description={item.description}>
              <Photo
                photo={imagensFacilidades(item)}
                alt={item.title}
                classeImg="imgFacilidades"
              />
            </CardFelicidades>
          </Item>
        ))}
      </Lista>
    </Section>
  );
};

export default Facilidades;
