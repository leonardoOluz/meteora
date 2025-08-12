import { Favorite } from "@/types/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState: Favorite[] = [];

const favoritoSlicer = createSlice({
  name: "favorito",
  initialState,
  reducers: {
    setFavorito: (state, { payload }: PayloadAction<Favorite>) => {
      const isExist = state.find(
        (item) => item.idProduct === payload.idProduct
      );
      if (!isExist) {
        return [...state, { idProduct: payload.idProduct, id: uuidv4() }];
      }
      return [...state.filter((item) => item.idProduct !== payload.idProduct)];
    },
  },
});

export const { setFavorito } = favoritoSlicer.actions;
export default favoritoSlicer.reducer;
