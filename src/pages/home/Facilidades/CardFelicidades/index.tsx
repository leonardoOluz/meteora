import Typography from "@/components/Typography";
import styled from "styled-components";

const ContainerFacilidadesStyle = styled.div`
  max-width: 30.4rem;
  display: grid;
  grid-template-areas: "imagenFacilidades tituloFacilidades" "imagenFacilidades descricaoFacilidades";
  grid-template-columns: 1fr 3fr;
  grid-row-gap: 1.5rem;
  grid-column-gap: 2rem;
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
      <Typography elementoHtml="h4" nameClass="basicParagraphBold">
        {title}
      </Typography>
      <Typography elementoHtml="p" nameClass="basicParagraphSmall">
        {description}
      </Typography>
    </ContainerFacilidadesStyle>
  );
};

export default CardFelicidades;
