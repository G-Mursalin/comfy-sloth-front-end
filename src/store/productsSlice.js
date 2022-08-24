import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filtered_products: [],
    grid_view: true,
    productsLoading: false,
    productsError: false,
  },

  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload.products;
      state.filtered_products = action.payload.products;
    },
    productView: (state) => {
      state.grid_view = !state.grid_view;
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
