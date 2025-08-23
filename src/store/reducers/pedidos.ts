import { createOrder, getOrder } from "@/service";
import { IPedido } from "@/types/store";
import { showSuccessNotification } from "@/utils/showSuccessNotification";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState: IPedido[] = [];

export const fetchGetPedidos = createAsyncThunk<IPedido[]>(
  "pedidos/fetchGetPedidos",
  getOrder
)

export const addPedidoFetch = createAsyncThunk<IPedido[], IPedido>(
  "pedidos/addPedidoFetch",
  createOrder
);

const pedidosSlice = createSlice({
  name: "pedidos",
  initialState,
  reducers: {
    addPedido: (state, { payload }: PayloadAction<IPedido>) => {
      showSuccessNotification("Pedido realizado com sucesso!");
      return [
        ...state,
        {
          id: uuidv4(),
          address: payload.address,
          date: payload.date,
          totValue: payload.totValue,
          status: payload.status,
          frete: payload.frete,
          payment: payload.payment,
        },
      ];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addPedidoFetch.pending, (state) => state);
    builder.addCase(addPedidoFetch.rejected, (state) => state);
    builder.addCase(addPedidoFetch.fulfilled, (_, { payload }) => payload);
    builder.addCase(fetchGetPedidos.pending, (state) => state);
    builder.addCase(fetchGetPedidos.rejected, (state) => state);
    builder.addCase(fetchGetPedidos.fulfilled, (_, { payload }) => payload);
  },
});

export const { addPedido } = pedidosSlice.actions;
export default pedidosSlice.reducer;
