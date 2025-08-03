import { IPayment } from "@/types/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
      toast.success("Pagamento realizado com sucesso", {
        autoClose: 1000,
        hideProgressBar: true,
        theme: "colored",
      });

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
