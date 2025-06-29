import { fetchConsultaCep } from "@/service";
import { IData, IFormInputEndereco } from "@/types/checkout";
import { mapApiToFormInput } from "@/utils/addressMapper";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
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

export const searchAddress = createAsyncThunk<IData, string>(
  "address",
  fetchConsultaCep
);

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
      };
    },
    setAddressChecked: (state) => {
      return {
        ...state,
        addressChecked: true,
      };
    }
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
      return {
        ...mapApiToFormInput(payload)
      };
    });
    builder.addCase(searchAddress.rejected, (_, action) => {
      return {
        ...initialState,
        erro: true,
        status: "failed",
        errorMessage: action.error.message ?? "Erro ao buscar endereço",
      };
    });
  },
});

export const { setAddress, setAddressChecked } = addressSlice.actions;
export default addressSlice.reducer;
