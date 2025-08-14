import Typography from "../Typography";
import Botao from "../Botao";
import IconEmpty from "./IconEmpty";
import { thema } from "@/styles/thema";
import { DivCartIsEmpty } from "./styles";
import { useNavigate } from "react-router-dom";

interface CartIsEmptyProps {
  emptyType: "cart" | "order" | "favorite";
}
const CartIsEmpty = ({ emptyType }: CartIsEmptyProps) => {
  const navigate = useNavigate();
  let title = "";
  let description = "";

  switch (emptyType) {
    case "cart":
      title = "Seu Carrinho Está Vazio";
      description =
        "Parece que você ainda não adicionou nenhum item ao seu carrinho.";
      break;
    case "order":
      title = "Nenhum Pedido Encontrado";
      description = "Nenhum pedido foi encontrado.";
      break;
    case "favorite":
      title = "Nenhum Produto Favoritado";
      description = "Você ainda não adicionou nenhum produto aos favoritos.";
      break;
  }
  return (
    <DivCartIsEmpty>
      <IconEmpty emptyType={emptyType} />
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
