import { basicHeadingH5, basicParagraphBold } from "@/styles/stylesGlobal";
import styled from "styled-components";
import { css } from "styled-components";

const stylePriceModal = css`
  color: ${({ theme }) => theme.colorsPrimary.cinzaChumbo};
  ${basicHeadingH5}
`;

const stylePriceCard = css`
  ${basicParagraphBold(false)}
  text-decoration: line-through;
  color: ${({ theme }) => theme.colorsPrimary.cinza};
`;

const DivPrice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.6rem;
`;

const SpanNowPrice = styled.span<{ $priceModal: boolean }>`
  width: auto;
  ${basicParagraphBold(false)}
  ${({ $priceModal }) => $priceModal && stylePriceModal}
`;

const SpanOldPrice = styled.span`
  ${stylePriceCard}
`;
interface CheckPriceProps {
  price: number;
  valueCatPromo?: number;
  priceModal?: boolean;
}

const CheckPrice = ({
  price,
  valueCatPromo,
  priceModal = false,
}: CheckPriceProps) => {
  return valueCatPromo ? (
    <DivPrice>
      <SpanOldPrice>R$ {price.toFixed(2)}</SpanOldPrice>
      <SpanNowPrice $priceModal={priceModal}>
        R$ {(price - price * valueCatPromo).toFixed(2)}
      </SpanNowPrice>
    </DivPrice>
  ) : (
    <SpanNowPrice style={{ width: "100%" }} $priceModal={priceModal}>
      R$ {price.toFixed(2)}
    </SpanNowPrice>
  );
};

export default CheckPrice;
