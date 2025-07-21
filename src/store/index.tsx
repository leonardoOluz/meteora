import { configureStore } from "@reduxjs/toolkit";
import produtosSlice from "@/store/reducers/produtos";
import bannerSlice from "@/store/reducers/banner";
import categoriasSlice from "@/store/reducers/categorias";
import facilidadesSlice from "@/store/reducers/facilidades";
import carrinhoSlice from "@/store/reducers/carrinho";
import promocoesSlice from "@/store/reducers/promocoes";
import buscadorSlice from "@/store/reducers/buscador";
import usuarioSlice from "@/store/reducers/usuario";
import freteSlice from "@/store/reducers/frete";
import addressSlice from "@/store/reducers/address";
import paySlice from "@/store/reducers/pay";
import credCardSlice from "@/store/reducers/credCard";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    produtos: produtosSlice,
    banner: bannerSlice,
    categorias: categoriasSlice,
    facilidades: facilidadesSlice,
    carrinho: carrinhoSlice,
    promocoes: promocoesSlice,
    buscador: buscadorSlice,
    usuario: usuarioSlice,
    frete: freteSlice,
    address: addressSlice,
    pay: paySlice,
    credCard: credCardSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // Export a hook that can be reused to resolve types

export default store;
