import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {},
  reducers: {
    getTotalProducts: (state, action) => {},
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
