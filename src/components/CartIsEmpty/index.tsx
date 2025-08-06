import { thema } from "@/styles/thema";
import Typography from "../Typography";
import { DivCartIsEmpty } from "./styles";
import { PiShoppingCartSimple } from "react-icons/pi";
import Botao from "../Botao";
import { useNavigate } from "react-router-dom";
import { IoBagHandleSharp } from "react-icons/io5";

interface CartIsEmptyProps {
  emptyType: "cart" | "order";
}
const CartIsEmpty = ({ emptyType }: CartIsEmptyProps) => {
  const navigate = useNavigate();
  const title = emptyType === "cart" ? "Seu Carrinho Está Vazio" : "Nenhum Pedido Encontrado";
  const description = emptyType === "cart"
    ? "Parece que você ainda não adicionou nenhum item ao seu carrinho."
    : "Nenhum pedido foi encontrado.";

  return (
    <DivCartIsEmpty>
      {emptyType === "cart" ? (
        <PiShoppingCartSimple size={150} color={thema.colorsPrimary.cinzaChumbo}/>
      ) : (
        <IoBagHandleSharp size={150} color={thema.colorsPrimary.cinzaChumbo} />
      )}

      <Typography
        classNameTypograph="basicHeadingH2"
        elementoHtml="h2"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        {title}
      </Typography>
      <Typography
        classNameTypograph="paragraph"
        elementoHtml="p"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        {description} <br />
        Explore nossos produtos e encontre o que você <strong>Ama</strong>!
      </Typography>

      <Botao
        classNameBtn="btnSecundary"
        title="Ir às Compras"
        onClick={() => navigate("/")}
        type="button"
      >
        Ir às Compras
      </Botao>
    </DivCartIsEmpty>
  );
};

export default CartIsEmpty;
