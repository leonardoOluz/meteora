import Typography from "@components/Typography";
import { thema } from "@/styles/thema";
import Photo from "../Photo";
import Botao from "../Botao";
import { ArticleStyle, Container, FigStyle, SpanPrecoStyle } from "./styles";
import { ICardProduto } from "@/types/componentTypes";
import useSetImagens from "@/hooks/useSetImagens";
import { useState } from "react";
import ModalProduto from "../ModalProduto";
interface IProps {
  card: ICardProduto;
}

const CardProduto = ({ card }: IProps) => {
  const { imagensCardProdutos } = useSetImagens();
  const [modalOpen, setModalOpen] = useState(false);
  const openModalProduto = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <ArticleStyle>
        <Container>
          <FigStyle>
            <Photo
              photo={imagensCardProdutos(card.imagem)}
              alt={card.alt}
              classeImg="imgProdutoCard"
            />
            <figcaption style={{ paddingLeft: "1.6rem" }}>
              <Typography
                elementoHtml="h3"
                classNameTypograph="basicParagraphBold"
                isColor={thema.colorsPrimary.cinzaChumbo}
              >
                {card.titulo}
              </Typography>
            </figcaption>
          </FigStyle>
        </Container>
        <Container style={{ paddingLeft: "1.6rem", gap: "1.6rem" }}>
          <Typography
            elementoHtml="p"
            classNameTypograph="basicParagraphSmall"
            isColor={thema.colorsPrimary.cinzaChumbo}
          >
            {card.descricao}
          </Typography>
          <SpanPrecoStyle>R$ {card.preco.toFixed(2)}</SpanPrecoStyle>
          <Botao handleClick={openModalProduto} classNameBtn="btnSecundary">
            Ver Mais
          </Botao>
        </Container>
      </ArticleStyle>
      {modalOpen && (
        <ModalProduto
          handleClose={openModalProduto}
          isOpen={modalOpen}
          card={card}
        />
      )}
    </>
  );
};

export default CardProduto;
