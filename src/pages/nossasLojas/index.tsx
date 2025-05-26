import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { thema } from "@/styles/thema";
import { DivNossasLojas } from "./styles";
import List from "@/components/List";
import ItemList from "@/components/List/ItemList";
import NossasLojasMap from "./NossasLojasMap";
import NossasLojasCard from "./NossasLojasCard";
import nossasLojas from "./json/nossasLojas.json";
import { useState } from "react";
import useScroll from "@/hooks/useScroll";

export type NossasLojas = (typeof nossasLojas.nossasLojas)[0];
const NossaLojas = () => {
  const [map, setMap] = useState<NossasLojas>(nossasLojas.nossasLojas[0]);
  const scrollIntoView = useScroll();
  const handleClick = (loja: NossasLojas) => {
    setMap(loja);
    scrollIntoView(map.id);
  };

  return (
    <Section classNameSection="secao nossas lojas">
      <Typography
        classNameTypograph="basicHeadingH3"
        elementoHtml="h2"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        Nossas Lojas
      </Typography>
      <DivNossasLojas>
        <List classeLista="listNossasLojas" aria-label="Lista de nossas lojas">
          {nossasLojas.nossasLojas.map((loja) => (
            <ItemList key={loja.id}>
              <NossasLojasCard
                endereco={loja.endereco}
                loja={loja.loja}
                image={loja.image}
                onClick={() => handleClick(loja)}
              />
            </ItemList>
          ))}
        </List>
      </DivNossasLojas>
      <NossasLojasMap map={map} />
    </Section>
  );
};

export default NossaLojas;
