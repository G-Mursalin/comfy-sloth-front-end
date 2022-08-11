import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: { products: [], productsLoading: false, productsError: false },

  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload.products;
    },
    productsLoading: (state) => {
      state.productsLoading = !state.productsLoading;
    },
    productsError: (state) => {
      state.productsError = !state.productsError;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
