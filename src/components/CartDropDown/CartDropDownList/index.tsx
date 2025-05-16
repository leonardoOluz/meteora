import CardCarrinho from "@/components/CardCarrinho";
import List from "@/components/List";
import ItemList from "@/components/List/ItemList";
import useFindSearchPromo from "@/hooks/useFindSearchPromo";
import { selectCartForProduct } from "@/store/selectors/itemSelectors";
import { RootState } from "@/types/store";
import { useSelector } from "react-redux";
const CartDropDownList = () => {
  const { findSearchPromo } = useFindSearchPromo();
  const promocao = useSelector((state: RootState) => state.promocoes);
  const cart = useSelector((state: RootState) => state.carrinho);
  const carrinho = useSelector((state: RootState) => {
    return selectCartForProduct(state);
  });

  return (
    <List classeLista="listaCarrinho" aria-label="lista de carrinho suspensa">
      {carrinho.map((itemProduct) => (
        <ItemList key={itemProduct.id}>
          <CardCarrinho
            card={itemProduct}
            cartSuspensa
            totQuanty={
              cart.data.find((itemCart) => itemCart.id === itemProduct.id)
                ?.quantity || 0
            }
            valueCatPromo={findSearchPromo(itemProduct.id, promocao)}
          />
        </ItemList>
      ))}
    </List>
  );
};

export default CartDropDownList;
