import { IPedido } from "@/types/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const initialState: IPedido[] = [];

const pedidosSlice = createSlice({
  name: "pedidos",
  initialState,
  reducers: {
    addPedido: (state, { payload }: PayloadAction<IPedido>) => {
      toast.success("Pedido realizado com sucesso!", {
        theme: "colored",
        hideProgressBar: true,
        autoClose: 3000,
      });
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
