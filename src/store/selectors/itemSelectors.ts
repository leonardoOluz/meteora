import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/types/store";

const selectRawProdutos = (state: RootState) => state.produtos;
const selectCartProduct = (state: RootState) => state;

export const selectProdutosPorCategoria = createSelector(
  [selectRawProdutos, (_, categoria: string | undefined) => categoria],
  (produtos, categoria) =>
    produtos.filter((item) => item.categoria === categoria)
);

export const selectCartForProduct = createSelector(
  [selectCartProduct],
  (state) => {
    return state.produtos.filter((itemProduct) =>
      state.carrinho.data.some((itemCart) => itemCart.id === itemProduct.id)
    );
  }
);

export const selectTotCart = createSelector([selectCartProduct], (state) => {
  
  const { tPrice, tProduct } = state.produtos.reduce(
    
    ({ tPrice, tProduct }, itemProduct) => {
      state.carrinho.data.map((itemCart) => {
        if (itemCart.id === itemProduct.id) {
          tPrice += itemCart.quantity * itemProduct.preco;
          tProduct += itemCart.quantity;
        }
      });
      return {tPrice, tProduct}
    },
    
    { tPrice: 0, tProduct: 0 }
  );
  
  return { tPrice, tProduct }

});
