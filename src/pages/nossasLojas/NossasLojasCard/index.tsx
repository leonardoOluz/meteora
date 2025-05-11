import Typography from "@/components/Typography";
import { thema } from "@/styles/thema";
import styled from "styled-components";

const DivLoja = styled.div``;
const SpanLoja = styled.span``;

interface INossasLojasCardProps {
  loja: string;
  endereco: string;
}

const NossasLojasCard = ({ endereco, loja }: INossasLojasCardProps) => {
  return (
    <DivLoja>
      <Typography
        classNameTypograph="basicHeadingH3"
        elementoHtml="h4"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        {loja}
      </Typography>
      <SpanLoja>{endereco}</SpanLoja>
    </DivLoja>
  );
};

export default NossasLojasCard;
