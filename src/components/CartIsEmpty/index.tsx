import { thema } from "@/styles/thema";
import Typography from "../Typography";
import { DivCartIsEmpty } from "./styles";
import { PiShoppingCartSimple } from "react-icons/pi";
import Botao from "../Botao";
import { useNavigate } from "react-router-dom";

const CartIsEmpty = () => {
  const navigate = useNavigate();
  return (
    <DivCartIsEmpty>
      <PiShoppingCartSimple
        size={150}
        color={thema.colorsPrimary.cinzaChumbo}
      />
      <Typography
        classNameTypograph="basicHeadingH2"
        elementoHtml="h2"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        Seu Carrinho Está Vazio
      </Typography>
      <Typography
        classNameTypograph="paragraph"
        elementoHtml="p"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        Parece que você ainda não adicionou nenhum item.
      </Typography>
      <Typography
        classNameTypograph="paragraph"
        elementoHtml="p"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        Que tal começar a explorar nossos produtos?
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
