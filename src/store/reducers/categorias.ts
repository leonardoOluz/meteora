import { createSlice } from "@reduxjs/toolkit";
import categorias from "@/json/categorias.json";

const initialState = categorias.categorias;

const categoriasSlice = createSlice({
  name: "categorias",
  initialState,
  reducers:{}
});

export default categoriasSlice.reducer;