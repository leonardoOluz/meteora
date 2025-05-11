import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { thema } from "@/styles/thema";
import { DivNossasLojas } from "./styles";
import List from "@/components/List";
import ItemList from "@/components/List/ItemList";
import NossasLojasMap from "./NossasLojasMap";
import NossasLojasCard from "./NossasLojasCard";

const NossaLojas = () => {
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
          <ItemList>
            <NossasLojasCard endereco="Endereço da Loja 1" loja="Loja 1" />
          </ItemList>
          <ItemList>
            <NossasLojasCard endereco="Endereço da Loja 2" loja="Loja 2" />
          </ItemList>
          <ItemList>
            <NossasLojasCard endereco="Endereço da Loja 3" loja="Loja 3" />
          </ItemList>
        </List>
      </DivNossasLojas>
      <NossasLojasMap />
    </Section>
  );
};

export default NossaLojas;
