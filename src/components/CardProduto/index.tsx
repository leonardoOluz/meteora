import Typography from "@components/Typography";
import { thema } from "@/styles/thema";
import Botao from "../Botao";
import { ArticleStyle, Container } from "./styles";
import { ICardProduto } from "@/types/componentTypes";
import { useState } from "react";
import CheckModal from "./components/CheckModal";
import FigureCard from "./components/FigureCard";
import FigcaptionCard from "./components/FigcaptionCard";
import CheckPrice from "../CheckPrice";
import useSelectCatPromocao from "@/hooks/useSelectCatPromocao";
interface IProps {
  card: ICardProduto;
}

const CardProduto = ({ card }: IProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const checkPromocao = useSelectCatPromocao();
  const openModalProduto = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <ArticleStyle>
      <Container>
        <FigureCard card={card}>
          <FigcaptionCard card={card} />
        </FigureCard>
      </Container>
      <Container style={{ paddingLeft: "1.6rem", gap: "1.6rem" }}>
        <Typography
          elementoHtml="p"
          classNameTypograph="basicParagraphSmall"
          isColor={thema.colorsPrimary.cinzaChumbo}
        >
          {card.descricao}
        </Typography>
        <CheckPrice price={card.preco} valueCatPromo={checkPromocao(card.id)} />
        <Botao handleClick={openModalProduto} classNameBtn="btnSecundary">
          Ver Mais
        </Botao>
      </Container>
      <CheckModal
        card={card}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        openModalProduto={openModalProduto}
      />
    </ArticleStyle>
  );
};

export default CardProduto;
