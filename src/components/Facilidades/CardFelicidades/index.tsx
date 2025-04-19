import Typography from "@/components/Typography";
import { thema } from "@/styles/thema";
import styled from "styled-components";

const ContainerFacilidadesStyle = styled.div`
  max-width: 28.4rem;
  display: grid;
  grid-template-areas: "imagenFacilidades tituloFacilidades" "imagenFacilidades descricaoFacilidades";
  grid-template-columns: 1fr 3fr;
  grid-row-gap: 1.6rem;
  grid-column-gap: 2.4rem;
`;
interface IProps {
  children: React.ReactNode;
  title: string;
  description: string;
}
const CardFelicidades = ({ children, title, description }: IProps) => {
  return (
    <ContainerFacilidadesStyle>
      {children}
      <Typography
        elementoHtml="h4"
        classNameTypograph="basicParagraphBold"
        isColor={thema.colorsPrimary.verde}
        isGrid="tituloFacilidades"
      >
        {title}
      </Typography>
      <Typography
        elementoHtml="p"
        classNameTypograph="basicParagraphSmall"
        isGrid="descricaoFacilidades"
      >
        {description}
      </Typography>
    </ContainerFacilidadesStyle>
  );
};

export default CardFelicidades;
