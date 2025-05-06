import { basicParagraphBold } from "@/styles/stylesGlobal";
import { ICardProduto } from "@/types/componentTypes";
import styled from "styled-components";

const DivPrice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.6rem;
`;

const SpanNowPrice = styled.span`
  width: auto;
  ${basicParagraphBold(false)}
`;
const SpanOldPrice = styled.span`
  ${basicParagraphBold(false)}
  text-decoration: line-through;
  color: ${({ theme }) => theme.colorsPrimary.cinza};
`;

interface CheckPriceProps {
  card: ICardProduto;
  valueCatPromo?: number;
}

const CheckPrice = ({ card, valueCatPromo }: CheckPriceProps) => {
  return (
    <>
      {valueCatPromo ? (
        <DivPrice>
          <SpanOldPrice>R$ {card.preco.toFixed(2)}</SpanOldPrice>
          <SpanNowPrice>R$ {(card.preco - (card.preco * valueCatPromo)).toFixed(2)}</SpanNowPrice>
        </DivPrice>
      ) : (
        <SpanNowPrice style={{ width: "100%" }}>R$ {card.preco.toFixed(2)}</SpanNowPrice>
      )}
    </>
  );
};

export default CheckPrice;
