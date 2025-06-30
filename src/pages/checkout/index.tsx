import CartIsEmpty from "@/components/CartIsEmpty";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import useArrayRoute from "@/hooks/useArrayRoute";
import { AppDispatch } from "@/store";
import { isCheckLogin } from "@/store/reducers/usuario";
import { thema } from "@/styles/thema";
import { RootState } from "@/types/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const pathRoute = [
  {
    path: "address",
    name: "Endereço",
  },
  { path: "pay", name: "Pagamento" },
  { path: "summary", name: "Resumo" },
];

const CheckoutBase = () => {
  const navigate = useNavigate();
  const arrayRouter = useArrayRoute();
  const totCart = useSelector((state: RootState) => state.carrinho).totProduct;
  const isLogado = useSelector((state: RootState) => state.usuario).isLogado;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(isCheckLogin());
    if (!isLogado) {
      navigate("/login");
    }
  }, [isLogado, navigate, dispatch]);

  const handlClick = (path: string) => {
    const newRoute =
      path === "address" ? "" : path === "pay" ? "pay" : "pay/summary";
    navigate(`/checkout/address/${newRoute}`);
  };
  return (
    <Section classNameSection="secao pagamento">
      {totCart === 0 ? (
        <CartIsEmpty />
      ) : (
        <>
          <Header classeHeader="headerCheckout">
            {pathRoute.map((word, index) => (
              <Typography
                key={index}
                elementoHtml="h2"
                classNameTypograph="basicParagraphLead"
                onClick={() => handlClick(word.path)}
                isColor={thema.colorsPrimary.preto}
                style={{
                  cursor: "pointer",
                  borderBottom: `5px solid ${
                    arrayRouter.includes(word.path) ? "green" : "#ccc"
                  }`,
                  padding: "0.5rem",
                }}
              >
                {word.name}
              </Typography>
            ))}
          </Header>
          <Outlet />
        </>
      )}
    </Section>
  );
};

export default CheckoutBase;
