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

interface IProps {
  card: ICardProduto;
  cartSuspensa?: boolean;
  totQuanty: number;
}

const CardCarrinho = ({ card, cartSuspensa, totQuanty }: IProps) => {
  const { imagensCardProdutos } = useSetImagens();

  if (cartSuspensa) {
    return (
      <ArtCardCartDropDown>
        <div className="cardImgDescription">
          <Photo
            photo={imagensCardProdutos(card.imagem)}
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
            <SelectedQuantity totProduct={totQuanty} isDropDown />
            <PriceSpanCardCart>
              R$ {(totQuanty * card.preco).toFixed(2)}
            </PriceSpanCardCart>
          </DivCarDropDown>
        </div>

        <MdDelete size={16} color="#fff" style={{ alignSelf: "center" }} />
      </ArtCardCartDropDown>
    );
  }

  return (
    <ArtCardCart>
      <DivImgDescrption>
        <Photo
          photo={imagensCardProdutos(card.imagem)}
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
          R$ {(totQuanty * card.preco).toFixed(2)}
        </PriceSpanCardCart>
        <SelectedQuantity totProduct={totQuanty} />
        <MdDelete size={16} color="#fff" />
      </DivActionsCart>
    </ArtCardCart>
  );
};

export default CardCarrinho;
