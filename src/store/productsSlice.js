import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filtered_products: [],
    sort_by: "price-lowest",
    products_view: false,
    productsLoading: false,
    productsError: false,
  },

  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload.products;
      state.filtered_products = action.payload.products;
    },
    productViewList: (state) => {
      state.products_view = true;
    },
    productViewGrid: (state) => {
      state.products_view = false;
    },
    productsLoading: (state) => {
      state.productsLoading = !state.productsLoading;
    },
    getSortByValue: (state, action) => {
      state.sort_by = action.payload.sortValue;
    },
    productsError: (state) => {
      state.productsError = !state.productsError;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
