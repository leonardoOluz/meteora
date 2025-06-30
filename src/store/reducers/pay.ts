import { IPayment } from "@/types/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IPayment = {
  method: ""
};

const paySlice = createSlice({
  name: "pay",
  initialState,
  reducers: {
    setTypePay: (state, { payload }: PayloadAction<IPayment["method"]>) => {
      return {
        ...state,
        method: payload,
      };
    },
  },
});

export const { setTypePay } = paySlice.actions;
export default paySlice.reducer;