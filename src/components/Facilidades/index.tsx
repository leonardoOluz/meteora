import Lista from "@/components/Lista";
import Item from "@/components/Lista/Item";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import Photo from "@/components/Photo";
import useSetImagens from "@/hooks/useSetImagens";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import CardFelicidades from "./CardFelicidades";

const Facilidades = () => {
  const { imagensFacilidades } = useSetImagens();
  const facilidades = useSelector((state: RootState) => state.facilidades);
  
  return (
    <Section classNameSection="secao-facilidades">
      <Typography elementoHtml="h2" classNameTypograph="basicHeadingH2">
        Conheça todas as nossas facilidades
      </Typography>
      <Lista classeLista="listaFelicidades" ariaLabel="Lista de facilidades">
        {facilidades.map((item) => (
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
