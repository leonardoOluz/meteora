import { configureStore } from "@reduxjs/toolkit";
import produtosSlice from "@/store/reducers/produtos";
import bannerSlice from "@/store/reducers/banner";
import categoriasSlice from "@/store/reducers/categorias";
import facilidadesSlice from "@/store/reducers/facilidades";
import carrinhoSlice from "@/store/reducers/carrinho";
import promocoesSlice from "@/store/reducers/promocoes";
import buscadorSlice from "@/store/reducers/buscador";

const store = configureStore({
  reducer: {
    produtos: produtosSlice,
    banner: bannerSlice,
    categorias: categoriasSlice,
    facilidades: facilidadesSlice,
    carrinho: carrinhoSlice,
    promocoes: promocoesSlice,
    buscador: buscadorSlice,
  },
});

export default store;
