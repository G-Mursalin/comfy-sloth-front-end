import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filtered_products: [],
    sort_by: "by-default",
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
    productsSort: (state, action) => {
      if (action.payload.sortType === "by-default") {
        state.filtered_products = state.products;
      }
      if (action.payload.sortType === "price-lowest") {
        state.filtered_products.sort((a, b) => a.price - b.price);
      }
      if (action.payload.sortType === "price-highest") {
        state.filtered_products.sort((a, b) => b.price - a.price);
      }
      if (action.payload.sortType === "name-a") {
        state.filtered_products.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (action.payload.sortType === "name-z") {
        state.filtered_products.sort((a, b) => b.name.localeCompare(a.name));
      }
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
