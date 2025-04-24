import { configureStore } from "@reduxjs/toolkit";
import produtosSlice from "@/store/reducers/produtos";
import bannerSlice from "@/store/reducers/banner";
import categoriasSlice from "@/store/reducers/categorias";
import facilidadesSlice from "@/store/reducers/facilidades";
import carrinhoSlice from "@/store/reducers/carrinho";

const store = configureStore({
  reducer: {
    produtos: produtosSlice,
    banner: bannerSlice,
    categorias: categoriasSlice,
    facilidades: facilidadesSlice,
    carrinho: carrinhoSlice,
  },
});

export default store;
