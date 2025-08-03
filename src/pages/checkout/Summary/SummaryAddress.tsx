import { RootState } from "@/types/store";
import { useSelector } from "react-redux";
import { AddressContainer } from "./styles";
import Typography from "@/components/Typography";
import { thema } from "@/styles/thema";

const SummaryAddress = () => {
  const address = useSelector((state: RootState) => state.address);
  const { totValue } = useSelector((state: RootState) => state.carrinho);
  const { price, service, deliveryTime } = useSelector(
    (state: RootState) => state.frete
  );
  const { method } = useSelector((state: RootState) => state.pay);

  return (
    <AddressContainer>
      <Typography
        classNameTypograph="basicParagraphBold"
        elementoHtml="p"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        <strong>Endereço:</strong> {address.rua}, {address.numero}
      </Typography>
      <Typography
        classNameTypograph="basicParagraphSmall"
        elementoHtml="p"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        <strong>Bairro:</strong> {address.bairro}, <strong>CEP:</strong>{" "}
        {address.cep}
      </Typography>
      <Typography
        classNameTypograph="basicParagraphSmall"
        elementoHtml="p"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        <strong>Cidade:</strong> {address.localidade}, <strong>Frete:</strong>{" "}
        <strong>R$ </strong>
        <strong>{price.toFixed(2).replace(".", ",")}</strong> <br />
        <strong>Serviço:</strong> {service} <strong>Tempo de Entrega:</strong>{" "}
        {deliveryTime}
      </Typography>
      <Typography
        classNameTypograph="basicParagraphSmall"
        elementoHtml="p"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        <strong>Forma de Pagamento:</strong> {method} <br />
        <strong>Valor Total:</strong> <strong>R$ </strong>{" "}
        {(price + totValue).toFixed(2).replace(".", ",")}
      </Typography>
    </AddressContainer>
  );
};

export default SummaryAddress;
