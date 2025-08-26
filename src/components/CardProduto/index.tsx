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
import { createFavoriteFetch, deleteFavoriteFetch } from "@/store/reducers/favorito";
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
  const { isLogado } = useSelector((state: RootState) => state.usuario);

  const handleFavoriteColor = (id: number): boolean => {
    return favorite.some((item) => item.idProduct === id);
  };
  const openModalProduto = () => {
    setModalOpen(!modalOpen);
  };

  const handleCheckFavoite = (idProduct: number) => {
    if (favorite.some((item) => item.idProduct === idProduct)) {
      dispatch(deleteFavoriteFetch(idProduct));
      return;
    }
    dispatch(createFavoriteFetch({ idProduct: card.id }))
  }

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
          {isLogado && (
            <Botao
              classNameBtn="btnUnset"
              aria-label="Botão de favorito"
              onClick={() => handleCheckFavoite(card.id)} // adiciona o id do usuario e id do produto ao estado global
              type="button"
            >
              <FaHeart
                size={25}
                color={
                  handleFavoriteColor(card.id)
                    ? thema.colorsPrimary.laranja
                    : thema.colorsPrimary.cinza
                }
              />
            </Botao>
          )}
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
