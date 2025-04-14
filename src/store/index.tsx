import { configureStore } from "@reduxjs/toolkit";
import produtosSlice from "@/store/reducers/produtos"

const store = configureStore({
  reducer: {
    produtos: produtosSlice
  },
});

export default store;