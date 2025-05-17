import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const buscadorSlice = createSlice({
  name: "buscador",
  initialState,
  reducers: {
    setBuscador(_, { payload }) {
      return payload;
    },
    clearBuscador() {
      return initialState;
    },
  },
});
export const { setBuscador, clearBuscador } = buscadorSlice.actions;
export default buscadorSlice.reducer;
