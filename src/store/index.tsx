import { configureStore } from "@reduxjs/toolkit";
import produtosSlice from "@/store/reducers/produtos";
import bannerSlice from "@/store/reducers/banner";
import categoriasSlice from "@/store/reducers/categorias";
import facilidadesSlice from "@/store/reducers/facilidades";

const store = configureStore({
  reducer: {
    produtos: produtosSlice,
    banner: bannerSlice,
    categorias: categoriasSlice,
    facilidades: facilidadesSlice,
  },
});

export default store;
