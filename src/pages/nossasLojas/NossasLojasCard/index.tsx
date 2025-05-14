import Photo from "@/components/Photo";
import Typography from "@/components/Typography";
import { basicParagraphSmall } from "@/styles/stylesGlobal";
import { thema } from "@/styles/thema";
import styled from "styled-components";

const DivLoja = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-areas: "imgLoja loja" "imgLoja loja" "imgLoja endereco" "imgLoja endereco";
    grid-template-columns: 1fr 2fr;
    grid-row-gap: 0.4rem;
    grid-column-gap: 2.6rem;
  }
`;
const SpanAddress = styled.span`
  grid-area: "endereco";
  text-align: center;
  ${basicParagraphSmall(false)}

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
  }
`;
interface INossasLojasCardProps {
  loja: string;
  endereco: string;
  image: string;
  onClick: () => void;
}

const NossasLojasCard = ({
  endereco,
  loja,
  image,
  onClick,
}: INossasLojasCardProps) => {
  return (
    <DivLoja title={loja} onClick={onClick}>
      <Photo
        src={image}
        alt={loja}
        classeImg="imgNossasLojas"
        style={{ gridArea: "imgLoja" }}
      />
      <Typography
        classNameTypograph="basicHendingH4"
        elementoHtml="h4"
        isColor={thema.colorsPrimary.cinzaChumbo}
        style={{ gridArea: "loja" }}
      >
        {loja}
      </Typography>
      <SpanAddress>{endereco}</SpanAddress>
    </DivLoja>
  );
};

export default NossasLojasCard;
