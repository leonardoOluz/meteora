import { createFavorite, deleteFavorite, getFavorites } from "@/service";
import { KeyIdProduct } from "@/types/componentTypes";
import { Favorite } from "@/types/store";
import { createAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: Favorite[] = [];

export const fetchGetFavoritosSaga = createAction("favorito/fetchGetFavoritosSaga");

export const getFavoriteFetch = createAsyncThunk<Favorite[]>(
  "favorito/getFavoriteFetch",
  getFavorites
);

export const createFavoriteFetch = createAsyncThunk<Favorite[], Favorite>(
  "favorito/createFavoriteFetch",
  createFavorite
);

export const deleteFavoriteFetch = createAsyncThunk<Favorite[], KeyIdProduct>(
  "favorito/deleteFavoriteFetch",
  deleteFavorite
)

const favoritoSlicer = createSlice({
  name: "favorito",
  initialState,
  reducers: {
    setFavorito: (_, { payload }: PayloadAction<Favorite[]>) => {
      return payload
    },
    clearFavorito: () => {
      return [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getFavoriteFetch.fulfilled, (_, { payload }) => {
      return payload;
    });
    builder.addCase(createFavoriteFetch.fulfilled, (_, { payload }) => {
      return payload;
    });
    builder.addCase(deleteFavoriteFetch.fulfilled, (_, { payload }) => {
      return payload;
    });
  },
});

export const { setFavorito, clearFavorito } = favoritoSlicer.actions;
export default favoritoSlicer.reducer;
