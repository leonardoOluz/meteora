import { createOrder, getOrder } from "@/service";
import { IPedido } from "@/types/store";
import { showSuccessNotification } from "@/utils/showSuccessNotification";
import { createAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IPedido[] = [];

export const fetchGetPedidosSaga = createAction('fetchGetPedidosSaga');

export const fetchGetPedidos = createAsyncThunk<IPedido[]>(
  "pedidos/fetchGetPedidos",
  getOrder
);
export const addPedidoFetch = createAsyncThunk<IPedido[], IPedido>(
  "pedidos/addPedidoFetch",
  createOrder
);

const pedidosSlice = createSlice({
  name: "pedidos",
  initialState,
  reducers: {
    getOrders: (_, { payload }: PayloadAction<IPedido[]>) => {
      return payload;
    },
    clearOrders: () => {
      return [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addPedidoFetch.pending, (state) => state);
    builder.addCase(addPedidoFetch.rejected, (state) => state);
    builder.addCase(addPedidoFetch.fulfilled, (_, { payload }) => {
      showSuccessNotification("Pedido realizado com sucesso!");
      return payload;
    });
    builder.addCase(fetchGetPedidos.pending, (state) => state);
    builder.addCase(fetchGetPedidos.rejected, (state) => state);
    builder.addCase(fetchGetPedidos.fulfilled, (_, { payload }) => payload);
  },
});

export const { getOrders, clearOrders } = pedidosSlice.actions;
export default pedidosSlice.reducer;
