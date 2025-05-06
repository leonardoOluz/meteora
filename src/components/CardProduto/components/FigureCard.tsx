import Photo from "@/components/Photo";
import useSetImagens from "@/hooks/useSetImagens";
import { ICardProduto } from "@/types/componentTypes";
import styled from "styled-components";

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

interface FigureCardProps extends React.HTMLAttributes<HTMLElement> {
  card: ICardProduto;
}
const FigureCard = ({ card, children }: FigureCardProps) => {
  const { imagensCardProdutos } = useSetImagens();
  return (
    <Figure>
      <Photo
        photo={imagensCardProdutos(card.imagem)}
        alt={card.alt}
        classeImg="imgProdutoCard"
      />
      {children}
    </Figure>
  );
};

export default FigureCard;
