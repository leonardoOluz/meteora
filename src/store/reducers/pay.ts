import { IPayment } from "@/types/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IPayment = {
  method: "",
  checkedPay: false,
  priceTot: 0,
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
    setCheckedPay: (state, { payload }: PayloadAction<IPayment["checkedPay"]>) => {
      return {
        ...state,
        checkedPay: payload,
      };
    },
  },
});

export const { setTypePay, setCheckedPay } = paySlice.actions;
export default paySlice.reducer;