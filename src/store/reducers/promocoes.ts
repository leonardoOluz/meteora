import { IPromocoes } from "@/types/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IPromocoes = {
  listProductsPromo: [],
  categories: { nFive: 0.1, nFour: 0.15, nOne: 0.3, nThree: 0.45, nTwo: 0.5 },
};

const promocoesSlice = createSlice({
  name: "promocoes",
  initialState,
  reducers: {},
});

export default promocoesSlice.reducer;
