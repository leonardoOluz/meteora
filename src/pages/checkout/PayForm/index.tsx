import CheckKindPay from "./components/CheckKindPay";
import Typography from "@/components/Typography";
import LoaderDualRing from "@/components/Loader";
import { PaymentMethod, RootState } from "@/types/store";
import { useSelector } from "react-redux";
import { AdsForPay } from "@/components/Ads";
import { DivPay } from "./styles";
import { thema } from "@/styles/thema";
import { lazy, Suspense } from "react";
import useCheckAddress from "@/hooks/useCheckAddress";
const PayForPix = lazy(() => import("./components/PayForPix"));
const PayForCards = lazy(() => import("./components/PayForCards"));
const BoletoSimulado = lazy(() => import("./components/PayForTicket"));

const PayForm = () => {
  const { method } = useSelector((state: RootState) => state.pay);
   useCheckAddress();
   
  return (
    <DivPay>
      <Typography
        classNameTypograph="basicHeadingH2"
        elementoHtml="h2"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        Escolha a forma de pagamento
      </Typography>

      <AdsForPay />
      <CheckKindPay />
      <Suspense fallback={<LoaderDualRing />}>
        {method === PaymentMethod.Pix && <PayForPix />}
        {method === PaymentMethod.Boleto && <BoletoSimulado />}
        {method === PaymentMethod.CartaoDeCredito && <PayForCards />}
      </Suspense>
    </DivPay>
  );
};

export default PayForm;
