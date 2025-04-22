import Section from "@/components/Section";
import Typography from "@/components/Typography";
import Photo from "@/components/Photo";
import useSetImagens from "@/hooks/useSetImagens";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import CardFelicidades from "./CardFelicidades";
import List from "../List";
import ItemList from "../List/Item";

const Facilidades = () => {
  const { imagensFacilidades } = useSetImagens();
  const facilidades = useSelector((state: RootState) => state.facilidades);
  
  return (
    <Section classNameSection="secao-facilidades">
      <Typography elementoHtml="h2" classNameTypograph="basicHeadingH2">
        Conheça todas as nossas facilidades
      </Typography>
      <List classeLista="listaFelicidades" ariaLabel="Lista de facilidades">
        {facilidades.map((item) => (
          <ItemList key={item.id}>
            <CardFelicidades title={item.title} description={item.description}>
              <Photo
                photo={imagensFacilidades(item.image)}
                alt={item.title}
                classeImg="imgFacilidades"
              />
            </CardFelicidades>
          </ItemList>
        ))}
      </List>
    </Section>
  );
};

export default Facilidades;
