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
export const selectDetailsTheCartForProduct = createSelector(
  [selectCartProduct, (_, id: number) => id],
  (state, id) => {
    return state.carrinho.data.find((itemCart) => itemCart.id === id)
  }
);