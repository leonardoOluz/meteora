import { ICardProduto } from "@/types/componentTypes";
import {
  CardPedido,
  CardPedidoContent,
  CardPedidoDetails,
  CardPedidoHeader,
} from "./styles";
import { IPedido } from "@/types/store";
import Photo from "@/components/Photo";
import useSetImagens from "@/hooks/useSetImagens";
import Typography from "@/components/Typography";
import { thema } from "@/styles/thema";

interface PedidosCardProps {
  product: ICardProduto;
  pedido: IPedido;
}
const PedidosCard = ({ product, pedido }: PedidosCardProps) => {
  const { imagensCardProdutos } = useSetImagens();
  return (
    <CardPedido>
      <CardPedidoHeader>
        <Photo
          src={imagensCardProdutos(product.imagem)}
          alt={product.titulo}
          classeImg="imgCarrinho"
        />
      </CardPedidoHeader>
      <CardPedidoContent>
        <Typography
          classNameTypograph="basicParagraphLead"
          elementoHtml="h3"
          isColor={thema.colorsPrimary.coral}
        >
          {product.titulo}
        </Typography>
        <Typography
          classNameTypograph="basicParagraphSmall"
          elementoHtml="p"
          isColor={thema.colorsPrimary.cinzaChumbo}
        >
          {product.descricao.slice(0, 50)} ...
        </Typography>
        <CardPedidoDetails>
          {pedido.date.map((date) =>
            date.details.map((detail) => (
              product.id === date.id ? (
                <Typography
                classNameTypograph="basicParagraphSmall"
                elementoHtml="p"
                isColor={thema.colorsPrimary.cinzaChumbo}
              >
                <strong>Cor: </strong>
                {detail.cor} - <strong>Tamanho: </strong>
                {detail.tamanho}.
              </Typography>
              ) : null
            )))}
        </CardPedidoDetails>
      
      </CardPedidoContent>
    </CardPedido>
  );
};

export default PedidosCard;
