import { IPedido } from "@/types/store";
import { showSuccessNotification } from "@/utils/showSuccessNotification";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState: IPedido[] = [];

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
});

export const { addPedido } = pedidosSlice.actions;
export default pedidosSlice.reducer;
