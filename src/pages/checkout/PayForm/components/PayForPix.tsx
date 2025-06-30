import Botao from "@/components/Botao";
import Typography from "@/components/Typography";
import { RootState } from "@/types/store";
import { setStorage } from "@/utils/starage";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import styled from "styled-components";

const DivForPix = styled.div`
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;
const PayForPix = () => {
  const { totValue } = useSelector((state: RootState) => state.carrinho);
  const { price } = useSelector((state: RootState) => state.frete);
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    setCurrentUrl(window.location.origin);
  }, []);

  const handleOpenPix = () => {
    const dados = { totValue, price };
    setStorage("dados-PagePayPix", JSON.stringify(dados));
    window.open("/PagePayPix", "_blank", "width=500,height=600");
  };

  return (
    <DivForPix>
      <Typography classNameTypograph="basicHeadingH2" elementoHtml="h2">
        Pagamento com Pix
      </Typography>
      <Typography classNameTypograph="paragraph" elementoHtml="p">
        <b>Valor:</b> R$ {(totValue + price).toFixed(2)}
      </Typography>
      <QRCode
        value={`${currentUrl}/PagePayPix`}
        viewBox="0 0 200 200"
        size={150}
        onClick={handleOpenPix}
      />
      <Typography classNameTypograph="paragraph" elementoHtml="p">
        <b>Chave:</b> {currentUrl}/PagePayPix
      </Typography>
      <Botao classNameBtn="btnSecundary" onClick={handleOpenPix}>Pagar</Botao>
      <Typography classNameTypograph="paragraph" elementoHtml="p">
        <b>Obs:</b> O pagamento pode demorar alguns minutos para ser efetuado
      </Typography>
    </DivForPix>
  );
};

export default PayForPix;
