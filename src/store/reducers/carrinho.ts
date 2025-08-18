import {
  ICart,
  ICartSlice,
  AddProductCart,
  DeleteProduct,
  UpdateProduct,
} from "@/types/store";
import { showInfoToast } from "@/utils/showInfoToast";
import { showSuccessNotification } from "@/utils/showSuccessNotification";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ICartSlice = {
  data: [] as ICart[],
  totProduct: 0,
  totValue: 0,
  isCartDropDown: false,
};

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    addProduct: (state, { payload }: PayloadAction<AddProductCart>) => {
      const hasProduct = state.data.some((item) => item.id === payload.id);
      if (!hasProduct) {
        const newProductCart = {
          id: payload.id,
          quantity: 1,
          details: [payload.details],
        } as ICart;

        showSuccessNotification("Produto adicionado ao carrinho");
        return {
          ...state,
          data: [...state.data, newProductCart],
          totValue: state.totValue + payload.price,
          totProduct: state.totProduct + newProductCart.quantity,
        };
      };
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
      showSuccessNotification("Produto adicionado ao carrinho");
      return {
        ...state,
        data: [...newCart],
        totValue: state.totValue + payload.price,
        totProduct: state.totProduct + 1,
      };
    },
    deleteProduct: (state, { payload }: PayloadAction<DeleteProduct>) => {
      const cartProduct = state.data.find((item) => item.id === payload.id);
      const updateCart = state.data.filter(
        (itemCart) => itemCart.id !== payload.id
      );
      if (cartProduct) {
        showInfoToast("Produto removido do carrinho");
        return {
          ...state,
          data: [...updateCart],
          totValue: state.totValue - cartProduct?.quantity * payload.price,
          totProduct: state.totProduct - cartProduct.quantity,
        };
      }
    },
    updateProduct: (state, { payload }: PayloadAction<UpdateProduct>) => {
      const productCart = state.data.find(
        (itemProduct) => itemProduct.id === payload.id
      );

      if (productCart) {
        if (productCart?.quantity === 1) {
          showInfoToast("Produto removido do carrinho");
          return {
            ...state,
            data: state.data.filter((item) => item.id !== payload.id),
            totProduct: state.totProduct - 1,
            totValue: state.totValue - payload.price,
          };
        }
        
        const updateCart = state.data.map((itemCart) => {
          if (itemCart.id === payload.id) {
            showInfoToast("Item de produto removido do carrinho");
            return {
              id: itemCart.id,
              quantity: itemCart.quantity - 1,
              details: itemCart.details.filter(
                (detail) => detail.id !== payload.details.id
              ),
            };
          }

          return itemCart;
        });

        return {
          ...state,
          data: [...updateCart],
          totProduct: state.totProduct - 1,
          totValue: state.totValue - payload.price,
        };
      }
    },
    isCartVisible: (state, { payload }: PayloadAction<boolean>) => {
      return {
        ...state,
        isCartDropDown: payload,
      };
    },
    clearCart: () => {
      return initialState
    }
  },
});

export const { addProduct, deleteProduct, updateProduct, isCartVisible, clearCart } =
  carrinhoSlice.actions;
export default carrinhoSlice.reducer;
