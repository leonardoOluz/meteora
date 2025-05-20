import { ICardProduto } from "@/types/componentTypes";
import {
  ArtCardCart,
  ArtCardCartDropDown,
  DivActionsCart,
  DivCarDropDown,
  DivImgDescrption,
  PriceSpanCardCart,
} from "./styles";
import Photo from "../Photo";
import useSetImagens from "@/hooks/useSetImagens";
import Typography from "../Typography";
import SelectedQuantity from "../SelectedQuantity";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteProduct } from "@/store/reducers/carrinho";
import useCheckPrice from "@/hooks/useCheckPrice";
import useSelectCatPromocao from "@/hooks/useSelectCatPromocao";

interface IProps {
  card: ICardProduto;
  cartSuspensa?: boolean;
  totQuanty: number;
}

const CardCarrinho = ({ card, cartSuspensa, totQuanty }: IProps) => {
  const { imagensCardProdutos } = useSetImagens();
  const dispatch = useDispatch();
  const checkPromocao = useSelectCatPromocao();
  const price = useCheckPrice(card.preco, checkPromocao(card.id));

  const handleRemoveProduct = (): void => {
    dispatch(deleteProduct({ id: card.id, price }));
  };

  if (cartSuspensa) {
    return (
      <ArtCardCartDropDown>
        <div className="cardImgDescription">
          <Photo
            src={imagensCardProdutos(card.imagem)}
            alt={card.alt}
            classeImg="imgCarrinho"
          />
          <DivCarDropDown>
            <Typography
              elementoHtml="h3"
              classNameTypograph="basicParagraphBold"
            >
              {card.titulo}
            </Typography>
            <SelectedQuantity totProduct={totQuanty} isDropDown card={card} />
            <PriceSpanCardCart>
              R$ {(totQuanty * price).toFixed(2)}
            </PriceSpanCardCart>
          </DivCarDropDown>
        </div>

        <MdDelete
          size={16}
          color="#fff"
          style={{ alignSelf: "center" }}
          onClick={handleRemoveProduct}
          aria-label="remover produto do carrinho"
          title="remover produto do carrinho"
        />
      </ArtCardCartDropDown>
    );
  }

  return (
    <ArtCardCart>
      <DivImgDescrption>
        <Photo
          src={imagensCardProdutos(card.imagem)}
          alt={card.alt}
          classeImg="imgCarrinho"
        />
        <div>
          <Typography elementoHtml="h3" classNameTypograph="basicParagraphBold">
            {card.titulo}
          </Typography>
          <Typography elementoHtml="p" classNameTypograph="basicParagraphSmall">
            {card.descricao}
          </Typography>
        </div>
      </DivImgDescrption>
      <DivActionsCart>
        <PriceSpanCardCart>
          R$ {(totQuanty * price).toFixed(2)}
        </PriceSpanCardCart>
        <SelectedQuantity totProduct={totQuanty} card={card} />
        <MdDelete
          size={16}
          color="#fff"
          onClick={handleRemoveProduct}
          aria-label="remover produto do carrinho"
          title="remover produto do carrinho"
        />
      </DivActionsCart>
    </ArtCardCart>
  );
};

export default CardCarrinho;
