import { ICredCard } from "@/types/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ICredCard = {
  numberCard: "",
  cvv: "",
  name: "",
  validity: "",
};

const credCardSlice = createSlice({
  name: "credCard",
  initialState,
  reducers: {
    setCredCard: (state, { payload }: PayloadAction<ICredCard>) => {
      state.numberCard = payload.numberCard;
      state.cvv = payload.cvv;
      state.name = payload.name;
      state.validity = payload.validity;
    },
    clearCredCard: (state) => {
      state.numberCard = "";
      state.cvv = "";
      state.name = "";
      state.validity = "";
    },
  },
});
export const { setCredCard, clearCredCard } = credCardSlice.actions;
export default credCardSlice.reducer;
