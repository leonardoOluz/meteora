import { ICart, IProductCart } from "@/types/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: [] as ICart[],
  TotValue: 0,
};

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    addProduct: (state, { payload }: PayloadAction<IProductCart>) => {
      const hasProduct = state.data.some((item) => item.id === payload.id);

      if (!hasProduct) {
        const newProductCart = {
          id: payload.id,
          quantity: 1,
          details: [payload.details],
        } as ICart;

        return {
          data: [...state.data, newProductCart],
          TotValue: state.TotValue,
        };
      }
      
      const newCart = state.data.map((item) => {
        if (payload.id === item.id) {
          return {
            id: item.id,
            quantity: item.quantity + 1,
            details: [...item.details, payload.details],
          };
        }
        return item;
      });

      return {
        data: [...newCart],
        TotValue: state.TotValue,
      };
    },
  },
});

export const { addProduct } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
