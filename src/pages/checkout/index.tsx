import Header from "@/components/Header";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import useArrayRoute from "@/hooks/useArrayRoute";
import { thema } from "@/styles/thema";
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
  const handlClick = (path: string) => {
    const newRoute =
      path === "address" ? "" : path === "pay" ? "pay" : "pay/summary";
    navigate(`/checkout/address/${newRoute}`);
  };
  return (
    <Section classNameSection="secao promocoes">
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
    </Section>
  );
};

export default CheckoutBase;
