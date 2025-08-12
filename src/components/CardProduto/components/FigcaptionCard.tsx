import Typography from "@/components/Typography";
import { thema } from "@/styles/thema";
import { ProductCard } from "@/types/componentTypes";
import styled from "styled-components";

const Figcaption = styled.figcaption`
  padding-left: 1.6rem;
`;

interface IFigcaptionCardProps extends React.HTMLAttributes<HTMLElement> {
  card: ProductCard;
}
const FigcaptionCard = ({card, ...rest}: IFigcaptionCardProps) => {
  return (
    <Figcaption {...rest}>
      <Typography
        elementoHtml="h3"
        classNameTypograph="basicParagraphBold"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        {card.titulo}
      </Typography>
    </Figcaption>
  );
};

export default FigcaptionCard;
