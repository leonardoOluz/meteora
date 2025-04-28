import { ICart, ICartSlice, IProductCart } from "@/types/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ICartSlice  = {
  data: [] as ICart[],
  totProduct: 0,
  totValue: 0,
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
          totValue: state.totValue + payload.price,
          totProduct: state.totProduct + newProductCart.quantity
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
        totValue: state.totValue + payload.price,
        totProduct: state.totProduct + 1
      };
    },

    totPrice: (state, { payload }) => {
      return{
        data: [...state.data],
        totValue: payload,
        totProduct: state.totProduct
      }
    },
  },
});

export const { addProduct, totPrice } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
