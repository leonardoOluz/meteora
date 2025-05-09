import { IPromocoes } from "@/types/store";
import { createSlice } from "@reduxjs/toolkit";
import promocoes from "@/json/promocao.json";

const initialState: IPromocoes[] = promocoes.promocoes;

const promocoesSlice = createSlice({
  name: "promocoes",
  initialState,
  reducers: {},
});

export default promocoesSlice.reducer;
