import Typography from "@components/Typography";
import { thema } from "@/styles/thema";
import Botao from "../Botao";
import { ArticleStyle, Container } from "./styles";
import { ProductCard } from "@/types/componentTypes";
import { useState } from "react";
import CheckModal from "./components/CheckModal";
import FigureCard from "./components/FigureCard";
import FigcaptionCard from "./components/FigcaptionCard";
import CheckPrice from "../CheckPrice";
import useSelectCatPromocao from "@/hooks/useSelectCatPromocao";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { setFavorito } from "@/store/reducers/favorito";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
interface IProps {
  card: ProductCard;
}

const CardProduto = ({ card }: IProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const checkPromocao = useSelectCatPromocao();
  const dispatch = useDispatch<AppDispatch>();
  const favorite = useSelector((state: RootState) => state.favorito);

  const handleFavorite = (id: number): boolean => {
    return favorite.some((item) => item.idProduct === id);
  };
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Botao
            onClick={openModalProduto}
            aria-label="Botão de ver mais"
            classNameBtn="btnSecundary"
            type="button"
          >
            Ver Mais
          </Botao>
          <Botao
            classNameBtn="btnUnset"
            aria-label="Botão de favorito"
            onClick={() => dispatch(setFavorito({ idProduct: card.id }))}
            type="button"
          >
            <FaHeart
              size={25}
              color={
                handleFavorite(card.id)
                  ? thema.colorsPrimary.laranja
                  : thema.colorsPrimary.cinza
              }
            />
          </Botao>
        </div>
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
