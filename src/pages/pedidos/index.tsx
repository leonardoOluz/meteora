import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { thema } from "@/styles/thema";
import PedidosList from "./PedidosList";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import CartIsEmpty from "@/components/CartIsEmpty";
import NewsLetter from "@/components/NewsLetter";
import Facilidades from "@/components/Facilidades";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { fetchGetPedidos } from "@/store/reducers/pedidos";
const Pedidos = () => {
  const pedidos = useSelector((state: RootState) => state.pedidos);
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(fetchGetPedidos());
  }, [dispatch]);

  return (
    <>
      <Section classNameSection="secao produtos">
        {pedidos.length === 0 ? (
          <CartIsEmpty emptyType="order" />
        ) : (
          <>
            <Typography
              classNameTypograph="basicHeadingH2"
              elementoHtml="h2"
              isColor={thema.colorsPrimary.cinzaChumbo}
              style={{ margin: "2rem" }}
            >
              Meus Pedidos
            </Typography>
            <PedidosList />
          </>
        )}
      </Section>
      <Facilidades />
      <NewsLetter />
    </>
  );
};

export default Pedidos;
