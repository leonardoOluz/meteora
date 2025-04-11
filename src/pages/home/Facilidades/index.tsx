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
    <Section classNameSection="secaoFacilidades">
      <Typography elementoHtml="h2" classNameTypograph="basicHeadingH2">
        Conheça todas as nossas facilidades
      </Typography>
      <Lista classe="listaFelicidades" ariaLabel="Lista de facilidades">
        {facilidades.facilidades.map((item) => (
          <Item key={item.id}>
            <CardFelicidades title={item.title} description={item.description}>
              <Photo
                photo={imagensFacilidades(item.image)}
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
