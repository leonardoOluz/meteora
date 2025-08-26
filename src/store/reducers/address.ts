import { fetchConsultaCep, getAdressUser, saveAdressUser } from "@/service";
import { IFormInputEndereco } from "@/types/checkout";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  idUser: "",
  bairro: "",
  cep: "",
  localidade: "",
  rua: "",
  numero: "",
  erro: false,
  status: "idle", // idle | loading | succeeded | failed,
  errorMessage: "",
  addressChecked: false,
} as IFormInputEndereco;

export const searchAddress = createAsyncThunk<IFormInputEndereco, string>(
  "address",
  fetchConsultaCep
);
export const getAddressUserFetch = createAsyncThunk<IFormInputEndereco | null>(
  "address/setAddressChecked",
  getAdressUser
);
export const saveAddressUserFetch = createAsyncThunk<
  IFormInputEndereco,
  IFormInputEndereco
>("address/saveAddressUser", saveAdressUser);

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddress: (_, { payload }: PayloadAction<IFormInputEndereco>) => {
      return {
        ...payload,
        erro: false,
        status: "succeeded",
        errorMessage: "",
        addressChecked: true,
      };
    },
    clearAddress: () => {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchAddress.pending, () => {
      return {
        ...initialState,
        erro: false,
        status: "loading",
        errorMessage: "",
      };
    });
    builder.addCase(searchAddress.fulfilled, (_, { payload }) => {
      return payload;
    });
    builder.addCase(searchAddress.rejected, (_, action) => {
      return {
        ...initialState,
        erro: true,
        status: "failed",
        errorMessage: action.error.message ?? "Erro ao buscar endereço",
      };
    });
    builder.addCase(getAddressUserFetch.fulfilled, (_, { payload }) => {
      if (payload) {
        return {
          ...payload,
          erro: false,
          status: "succeeded",
          errorMessage: "",
          addressChecked: true,
        };
      }
      return initialState;
    });
    builder.addCase(saveAddressUserFetch.fulfilled, (_, { payload }) => {
      return {
        ...payload,
        erro: false,
        status: "succeeded",
        errorMessage: "",
        addressChecked: true,
      };
    });
  },
});

export const { setAddress, clearAddress } = addressSlice.actions;
export default addressSlice.reducer;
