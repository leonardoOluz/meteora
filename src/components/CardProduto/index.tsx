import Typography from "@components/Typography";
import { thema } from "@/styles/thema";
import Photo from "../Photo";
import Botao from "../Botao";
import { ArticleStyle, Container, FigStyle, SpanPrecoStyle } from "./styles";
import { ICardProduto } from "@/interface/IU";
import useSetImagens from "@/hooks/useSetImagens";


const CardProduto = ({alt, descricao, imagem, preco, titulo}: ICardProduto) => {
  const { imagensCardProdutos} = useSetImagens();
  
  return (
    <ArticleStyle>
      <Container>
        <FigStyle>
          <Photo photo={imagensCardProdutos(imagem)} alt={alt} classeImg="imgProdutoCard" />
          <figcaption style={{paddingLeft: "1.6rem"}}>
            <Typography
              elementoHtml="h3"
              classNameTypograph="basicParagraphBold"
              isColor={thema.colorsPrimary.cinzaChumbo}
            >
              {titulo}
            </Typography>
          </figcaption>
        </FigStyle>
      </Container>
      <Container style={{paddingLeft: "1.6rem", gap: "1.6rem"}}>        
        <Typography
          elementoHtml="p"
          classNameTypograph="basicParagraphSmall"
          isColor={thema.colorsPrimary.cinzaChumbo}
        >{descricao}
        </Typography>
        <SpanPrecoStyle>R$ {preco.toFixed(2)}</SpanPrecoStyle>
        <Botao classNameBtn="btnSecundary">Ver Mais</Botao>
      </Container>
    </ArticleStyle>
  );
};

export default CardProduto;
