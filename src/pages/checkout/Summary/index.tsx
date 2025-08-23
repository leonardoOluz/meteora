import Typography from "@/components/Typography";
import { DivSummary } from "./styles";
import { thema } from "@/styles/thema";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import { selectProductCart } from "@/store/selectors/itemSelectors";
import SummaryListProduct from "./SummaryListProduct";
import SummaryAddress from "./SummaryAddress";
import usePaymentConfirmed from "@/hooks/usePaymentConfirmed";
import Botao from "@/components/Botao";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { addPedidoFetch } from "@/store/reducers/pedidos";
import { useNavigate } from "react-router-dom";
import useCleanStatus from "@/hooks/useCleanStatus";
const Summary = () => {
  usePaymentConfirmed();
  const card = useSelector((state: RootState) => {
    return selectProductCart(state);
  });
  const cart = useSelector((state: RootState) => state.carrinho);
  const address = useSelector((state: RootState) => state.address);
  const frete = useSelector((state: RootState) => state.frete);
  const pay = useSelector((state: RootState) => state.pay);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const clearStatus = useCleanStatus();
  const handlefinalizePurchase = () => {
    dispatch(
      addPedidoFetch({
        status: "concluido",
        date: cart.data,
        totValue: cart.totValue + frete.price,
        frete,
        payment: pay,
        address: address,
      })
    );
    navigate("/pedidos");
    clearStatus();
  };

  return (
    <DivSummary>
      <Typography
        classNameTypograph="basicHeadingH2"
        elementoHtml="h2"
        isColor={thema.colorsPrimary.cinzaChumbo}
        style={{ marginBottom: "1rem" }}
      >
        Resumo do pedido
      </Typography>
      <SummaryListProduct card={card} cart={cart} />
      <SummaryAddress />
      <Botao
        classNameBtn="btnSecundary"
        style={{ margin: "1rem auto" }}
        type="button"
        onClick={handlefinalizePurchase}
      >
        Concluir compra
      </Botao>
    </DivSummary>
  );
};

export default Summary;
