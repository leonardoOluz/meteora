import CardCarrinho from "@/components/CardCarrinho";
import List from "@/components/List";
import ItemList from "@/components/List/ItemList";
import { ProductCard } from "@/types/componentTypes";
import { ICartSlice } from "@/types/store";
interface IListCart {
  cartProduct: ProductCard[];
  cart: ICartSlice;
}
const ListCart = ({ cart, cartProduct }: IListCart) => {
  return (
    <List classeLista="listaCarrinho" aria-label="lista de carrinhos">
      {cartProduct.map((itemProduct) => (
        <ItemList key={itemProduct.id}>
          <CardCarrinho
            card={itemProduct}
            totQuanty={
              cart.data.find((itemCart) => itemCart.id === itemProduct.id)
                ?.quantity || 0
            }
          />
        </ItemList>
      ))}
    </List>
  );
};

export default ListCart;
