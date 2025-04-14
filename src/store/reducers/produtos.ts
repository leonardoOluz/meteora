import { createSlice } from "@reduxjs/toolkit";
import produtos from "@/json/produtos.json";

const initialState = produtos.produtos;

const produtosSlice = createSlice({
  name: "produtos",
  initialState,
  reducers: {},
});

export default produtosSlice.reducer;
