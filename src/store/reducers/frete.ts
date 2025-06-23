import { IFrete } from "@/types/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  deliveryTime: "",
  price: 0,
  service: "",
  isFrete: false,
} as IFrete;

const freteSlice = createSlice({
  name: "frete",
  initialState,
  reducers: {
    setFrete: (_, { payload }: PayloadAction<IFrete>) => payload,
  },
});
export const { setFrete } = freteSlice.actions;
export default freteSlice.reducer;
