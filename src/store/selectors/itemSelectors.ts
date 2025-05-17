import { createSelector } from "@reduxjs/toolkit";
import { KeysIProductString, RootState } from "@/types/store";

const selectStoreState = (state: RootState) => state;

export const selectProductCat = createSelector(
  [selectStoreState, (_, categoria: string | undefined) => categoria],
  (state, categoria) => {
    const productCat = state.produtos.filter(
      (item) => item.categoria === categoria
    );
    const regexSearch = new RegExp(state.buscador, "i");
    return productCat.filter((item) => item.descricao.match(regexSearch));
  }
);
export const selectProductCart = createSelector([selectStoreState], (state) => {
  return state.produtos.filter((itemProduct) =>
    state.carrinho.data.some((itemCart) => itemCart.id === itemProduct.id)
  );
});
export const selectDetailsTheCartForProduct = createSelector(
  [selectStoreState, (_, id: number) => id],
  (state, id) => {
    return state.carrinho.data.find((itemCart) => itemCart.id === id);
  }
);
export const selectProductForSearch = createSelector(
  [
    selectStoreState,
    (_, typeDescription: KeysIProductString) => typeDescription,
  ],
  (state, typeDescription) => {
    const regexSearch = new RegExp(state.buscador, "i");
    return state.produtos.filter((item) =>
      item[typeDescription].match(regexSearch)
    );
  }
);
