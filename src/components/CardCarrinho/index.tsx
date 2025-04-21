import { ICardProduto } from "@/types/componentTypes";
import { ArtCardCart, DivActionsCart, DivImgDescrption } from "./styles";
import Photo from "../Photo";
import useSetImagens from "@/hooks/useSetImagens";
import Typography from "../Typography";
import SelectedQuantity from "../SelectedQuantity";
import { MdDelete } from "react-icons/md";

const CardCarrinho = (props: ICardProduto) => {
  const { imagensCardProdutos } = useSetImagens();
  return (
    <ArtCardCart>
      <DivImgDescrption>
        <Photo
          photo={imagensCardProdutos(props.imagem)}
          alt={props.alt}
          classeImg="imgCarrinho"
        />
        <div>
          <Typography elementoHtml="h3" classNameTypograph="basicParagraphBold">
            {props.titulo}
          </Typography>
          <Typography elementoHtml="p" classNameTypograph="basicParagraphSmall">
            {props.descricao}
          </Typography>
        </div>
      </DivImgDescrption>
      <DivActionsCart>
        <span>R$ {props.preco.toFixed(2)}</span>
        <SelectedQuantity />
        <MdDelete size={16} color="#fff"/>
      </DivActionsCart>
    </ArtCardCart>
  );
};

export default CardCarrinho;
