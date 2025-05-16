import CheckPrice from "@/components/CheckPrice";
import Typography from "@/components/Typography";
import { thema } from "@/styles/thema";
import styled from "styled-components";

const DivDescricaoProduto = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2.4rem;
  padding: 1.6rem;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 0;
  }
`;
const DivPrecoProdutod = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-top: 2.4rem;
  border-top: 1px solid rgba(0, 0, 0, 1);
  padding-bottom: 1.6rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
interface ModalProductDescriptionProps {
  titulo: string;
  descricao: string;
  preco: number;
  valueCatPromo?: number;
}
const ModalProductDescription = ({
  descricao,
  preco,
  titulo,
  valueCatPromo,
}: ModalProductDescriptionProps) => {
  return (
    <DivDescricaoProduto>
      <Typography
        elementoHtml="h2"
        classNameTypograph="basicParagraphBold"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        {titulo}
      </Typography>
      <Typography
        classNameTypograph="basicParagraphSmall"
        elementoHtml="p"
        isColor={thema.colorsPrimary.cinzaChumbo}
      >
        {descricao}
      </Typography>
      <DivPrecoProdutod>
        <CheckPrice
          price={preco}
          valueCatPromo={valueCatPromo}
          priceModal={!!valueCatPromo}
        />
        <Typography
          elementoHtml="p"
          classNameTypograph="basicParagraphSmall"
          isColor={thema.inputState.offState.default}
        >
          Vendido e entregue por Riachuelo
        </Typography>
      </DivPrecoProdutod>
    </DivDescricaoProduto>
  );
};

export default ModalProductDescription;
