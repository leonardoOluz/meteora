import { createSlice } from "@reduxjs/toolkit";
import banner from "@/json/banner.json";

const initialState = banner.banner;

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
});

export default bannerSlice.reducer;