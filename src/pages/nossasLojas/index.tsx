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
import { Link as LinkScroll } from "react-scroll";
const NossaLojas = () => {
  const [map, setMap] = useState<string>(nossasLojas.nossasLojas[0].maps);

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
          {nossasLojas.nossasLojas.map((loja, index) => (
            <ItemList key={index}>
              <LinkScroll to="map" smooth={true} duration={500}>
                <NossasLojasCard
                  endereco={loja.endereco}
                  loja={loja.loja}
                  image={loja.image}
                  onClick={() => setMap(loja.maps)}
                />
              </LinkScroll>
            </ItemList>
          ))}
        </List>
      </DivNossasLojas>
      <NossasLojasMap map={map} />
    </Section>
  );
};

export default NossaLojas;
