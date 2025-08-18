import { IPayment } from "@/types/store";
import { showSuccessNotification } from "@/utils/showSuccessNotification";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IPayment = {
  method: "",
  checkedPay: false,
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
    setCheckedPay: (
      state,
      { payload }: PayloadAction<IPayment["checkedPay"]>
    ) => {
      showSuccessNotification("Pagamento realizado com sucesso");
      return {
        ...state,
        checkedPay: payload,
      };
    },
    clearPay: () => {
      return {
        ...initialState,
      };
    },
  },
});

export const { setTypePay, setCheckedPay, clearPay } = paySlice.actions;
export default paySlice.reducer;
