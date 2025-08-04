import List from "@/components/List";
import { RootState } from "@/types/store";
import { useSelector } from "react-redux";
import ItemList from "@/components/List/ItemList";
import PedidosCard from "./PedidosCard";
import { thema } from "@/styles/thema";
import Typography from "@/components/Typography";
import { CardPedidoItem } from "./styles";

const PedidosList = () => {
  const pedidos = useSelector((state: RootState) => state.pedidos);
  const products = useSelector((state: RootState) => state.produtos);

  return (
    <List classeLista="listaCarrinho">
      {pedidos.map((pedido) => (
        <ItemList key={pedido.id}>
          <CardPedidoItem>
            {pedido.date.map((date) => (
              <PedidosCard
                product={products.find((prod) => prod.id === date.id)!}
                pedido={pedido}
              />
            ))}

            <Typography
              classNameTypograph="basicParagraphSmall"
              elementoHtml="p"
              isColor={thema.colorsPrimary.cinzaChumbo}
            >
              <strong>Total: R$</strong>{" "}
              {pedido.totValue.toFixed(2).replace(".", ",")}
              <br />
              <strong>Status de entrega: </strong> {pedido.status}
              <br />
              <strong>Data de entrega: </strong> {new Date().toLocaleDateString("pt-BR")}
            </Typography>
          </CardPedidoItem>
        </ItemList>
      ))}
    </List>
  );
};

export default PedidosList;
