import { simulateShipping } from "@/service";
import { IFrete } from "@/types/store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const checkShipping = createAsyncThunk<IFrete, number>(
  "frete",
  simulateShipping
);
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
    resetFrete: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(checkShipping.fulfilled, (_, { payload }) => {
      return payload;
    });
    builder.addCase(checkShipping.rejected, () => initialState);
    builder.addCase(checkShipping.pending, () => initialState);
  },
});
export const { setFrete, resetFrete } = freteSlice.actions;
export default freteSlice.reducer;
