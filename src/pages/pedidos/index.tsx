import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { thema } from "@/styles/thema";
import PedidosList from "./PedidosList";
import { useEffect } from "react";
import { clearCart } from "@/store/reducers/carrinho";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { clearAddress } from "@/store/reducers/address";
import { resetFrete } from "@/store/reducers/frete";
import { clearPay } from "@/store/reducers/pay";
const Pedidos = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(clearAddress());
    dispatch(resetFrete());
    dispatch(clearPay());
    dispatch(clearCart());
  }, [dispatch]);
  
  return (
    <Section classNameSection="secao carrinho">
      <Typography
        classNameTypograph="basicHeadingH2"
        elementoHtml="h2"
        isColor={thema.colorsPrimary.cinzaChumbo}
        style={{ margin: "2rem" }}
      >
        Meus Pedidos
      </Typography>
      <PedidosList />
    </Section>
  );
};

export default Pedidos;
