import { RootState } from "@/types/store";
import { setStorage } from "@/utils/starage";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import styled from "styled-components";

const DivForPix = styled.div`
  margin: 0 auto;
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
      <QRCode
        value={`${currentUrl}/PagePayPix`}
        viewBox="0 0 200 200"
        size={150}
        onClick={handleOpenPix}
      />
    </DivForPix>
  );
};

export default PayForPix;
