import { createSlice } from "@reduxjs/toolkit";
import facilidades from "@/json/facilidades.json";

const initialState = facilidades.facilidades;

const facilidadesSlice = createSlice({
  name: "facilidades",
  initialState,
  reducers: {},
});

export default facilidadesSlice.reducer;