import CartIsEmpty from "@/components/CartIsEmpty";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import useArrayRoute from "@/hooks/useArrayRoute";
import useWatchPayConfirmed from "@/hooks/useWatchPayConfirmed";
import { thema } from "@/styles/thema";
import { CheckoutSteps, RootState } from "@/types/store";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const pathRoute = [
  {
    path: CheckoutSteps.ADDRESS,
    name: "Endereço",
  },
  { path: CheckoutSteps.PAY, name: "Pagamento" },
  { path: CheckoutSteps.SUMMARY, name: "Resumo" },
];

const CheckoutBase = () => {
  const totCart = useSelector((state: RootState) => state.carrinho).totProduct;
  const arrayRouter = useArrayRoute();
  const navigate = useNavigate();
  useWatchPayConfirmed();
  const handlClick = (path: string) => {
    const newRoute =
      path === CheckoutSteps.ADDRESS
        ? ""
        : path === CheckoutSteps.PAY
        ? "pay"
        : "pay/summary";
    navigate(`/checkout/address/${newRoute}`);
  };
 
  
  return (
    <Section classNameSection="secao pagamento">
      {totCart === 0 ? (
        <CartIsEmpty emptyType="cart"/>
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
