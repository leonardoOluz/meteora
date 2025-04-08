import Typography from "@components/Typography";
import { thema } from "@/styles/thema";
import Photo from "../Photo";
import camiseta from "@assets/Tablet/Imagens Cards/camiseta.png";
import Botao from "../Botao";
import { ArticleStyle, Container, FigStyle, SpanPrecoStyle } from "./styles";

const CardProduto = () => {
  return (
    <ArticleStyle>
      <Container>
        <FigStyle>
          <Photo photo={camiseta} alt="camiseta" classeImg="imgProdutoCard" />
          <figcaption style={{paddingLeft: "1.6rem"}}>
            <Typography
              elementoHtml="h3"
              classTypograph="basicParagraphBold"
              isColor={thema.colorsPrimary.cinzaChumbo}
            >
              Camiseta Conforto
            </Typography>
          </figcaption>
        </FigStyle>
      </Container>
      <Container style={{paddingLeft: "1.6rem"}}>        
        <Typography
          elementoHtml="p"
          classTypograph="basicParagraphSmall"
          isColor={thema.colorsPrimary.cinzaChumbo}
        >
          Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o
          verão. Modelagem unissex.
        </Typography>
        <SpanPrecoStyle>R$ 70,00</SpanPrecoStyle>
        <Botao classBotao="botaoProdutoCard">Ver Mais</Botao>
      </Container>
    </ArticleStyle>
  );
};

export default CardProduto;
