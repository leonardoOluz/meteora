import { RootState } from "@/types/store";
import styled from "styled-components";
import Typography from "../Typography";
import { useSelector } from "react-redux";

const DivFreight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  border: 2px solid #13422c;
  background-color: #6feea8;
  border-radius: 0.4rem;
`;
const DeliveryFeeHeader = styled.p`
  font-size: 1.6rem;
`;
const PriceFreight = styled.span`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 2.5rem;
  color: #13422c;
`;
const ShippingPrices = () => {
  const { deliveryTime, price, service, isFrete } = useSelector(
    (state: RootState) => state.frete
  );
  if (!isFrete) return <></>;
  return (
    <DivFreight>
      <Typography
        classNameTypograph="basicParagraphBold"
        elementoHtml="p"
        isColor="#13422c"
      >
        {service}
      </Typography>
      <PriceFreight>{`R$ ${price.toFixed(2)}`}</PriceFreight>
      <DeliveryFeeHeader>{deliveryTime}</DeliveryFeeHeader>
    </DivFreight>
  );
};

export default ShippingPrices;
