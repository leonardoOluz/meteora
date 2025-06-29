import styled from "styled-components";
import Form from "../Form";
import Typography from "../Typography";
import Botao from "../Botao";
import { BsQrCode } from "react-icons/bs";
import { DivForm, FieldsetForm, LegendForm } from "@/styles/forms";
import { useEffect, useState } from "react";
import { getStorage, removeStorage, setStorage } from "@/utils/starage";
import LoaderDualRing from "../Loader";
import { thema } from "@/styles/thema";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const DivPagePayPix = styled.div`
  margin: auto;
  height: 100vh;
  background-color: ${({ theme }) => theme.colorsPrimary.verde};
`;
const DivQrCodeGrid = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const PagePayPix = () => {
  const [totProduct, setTotProduct] = useState<number | null>(null);
  const [priceFrete, setPriceFrete] = useState<number | null>(null);

  useEffect(() => {
    const dados = getStorage("dados-PagePayPix");
    if (dados) {
      const { totValue, price } = JSON.parse(dados);
      setTotProduct(totValue);
      setPriceFrete(price);
    }
  }, []);
  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    removeStorage("dados-PagePayPix");
    setStorage("pagamentoConfirmado", "true");
    window.close();
  };

  return (
    <DivPagePayPix>
      <Form
        classForm="formBasic"
        handleSubmit={handleConfirm}
        ariaLabel="Form de pagamento"
      >
        <FieldsetForm>
          <LegendForm>Pagamento via Pix</LegendForm>
          {totProduct && priceFrete ? (
            <>
            <DivQrCodeGrid>
              <RiMoneyDollarCircleFill size={60}/>
              <Typography
                classNameTypograph="basicHendingH4"
                elementoHtml="h3"
                isColor={thema.colorsPrimary.cinzaChumbo}
              >
                Facilidades com o Pix.
              </Typography>
            </DivQrCodeGrid>
              <DivForm>
                <Typography
                  classNameTypograph="basicParagraphSmall"
                  elementoHtml="p"
                  isColor={thema.colorsPrimary.cinzaChumbo}
                >
                  Total do produto: R${totProduct.toFixed(2) ?? 0}
                </Typography>
                <Typography
                  classNameTypograph="basicParagraphSmall"
                  elementoHtml="p"
                  isColor={thema.colorsPrimary.cinzaChumbo}
                >
                  Total do frete: R${priceFrete.toFixed(2) ?? 0}
                </Typography>
                <Typography
                  classNameTypograph="basicParagraphBold"
                  elementoHtml="p"
                  isColor={thema.colorsPrimary.cinzaChumbo}
                >
                  Total do pedido: R${(totProduct + priceFrete).toFixed(2) ?? 0}
                </Typography>
              </DivForm>
              <DivQrCodeGrid>
                <BsQrCode size={55} />
                <Typography
                  classNameTypograph="basicParagraphSmall"
                  elementoHtml="p"
                  isColor={thema.colorsPrimary.cinzaChumbo}
                >
                  Ao clicar em <strong>confirmar pagamento</strong> voce estará
                  confirmando o pagamento via Pix
                </Typography>
              </DivQrCodeGrid>
            </>
          ) : (
            <LoaderDualRing />
          )}
          <Botao classNameBtn="btnSecundary" type="submit">
            Confirmar Pagamento
          </Botao>
        </FieldsetForm>
      </Form>
    </DivPagePayPix>
  );
};
export default PagePayPix;
