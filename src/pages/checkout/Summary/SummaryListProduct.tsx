import List from "@/components/List";
import { ICardProduto } from "@/types/componentTypes";
import SummaryItensProduct from "./SummaryItensProduct";
import { ICartSlice } from "@/types/store";

interface ItensProductSummaryProps {
  card: ICardProduto[];
  cart: ICartSlice;
}
const SummaryListProduct = ({ card, cart }: ItensProductSummaryProps) => {
  return (
    <List classeLista="listSummary">
      {card.map((item) => (
        <SummaryItensProduct
          key={item.id}
          itemCard={item}
          totQuanty={
            cart.data.find((itemCart) => itemCart.id === item.id)?.quantity || 0
          }
        />
      ))}
    </List>
  );
};

export default SummaryListProduct;
