import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filtered_products: [],
    tempProducts: [],
    sort_by: "by-default",
    products_view: false,
    filters_initial_state: {
      text: "",
      company: "all",
      category: "all",
      price: 0,
      shipping: false,
    },
    filters: {
      companies: [],
      categories: [],
      max_priceDy: 0,
    },
    productsLoading: false,
    productsError: false,
  },

  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload.products;
      state.filtered_products = action.payload.products;
      state.tempProducts = action.payload.products;
      // Set States Values for Filters
      state.filters.max_priceDy = Math.max(
        ...state.filtered_products.map((val) => val.price)
      );
      state.filters_initial_state.price = state.filters.max_priceDy;
      state.filters.companies = [
        "all",
        ...new Set(state.filtered_products.map((val) => val.company)),
      ];
      state.filters.categories = [
        "all",
        ...new Set(state.filtered_products.map((val) => val.category)),
      ];
    },
    updateFilters: (state, action) => {
      state.filters_initial_state[action.payload.filterName] =
        action.payload.filterValue;
      const { text, category, company, price, shipping } =
        state.filters_initial_state;
      let products = [...state.tempProducts];
      if (text) {
        products = products.filter((product) =>
          product.name.toLowerCase().startsWith(text.toLowerCase())
        );
      }
      if (category !== "all") {
        products = products.filter(
          (product) => product.category.toLowerCase() === category.toLowerCase()
        );
      }
      if (company !== "all") {
        products = products.filter(
          (product) => product.company.toLowerCase() === company.toLowerCase()
        );
      }
      products = products.filter((product) => product.price <= price);
      if (shipping) {
        products = products.filter((product) => product.shipping === true);
      }

      state.filtered_products = products;
    },
    resetInitialFilters: (state) => {
      state.filters_initial_state = {
        ...state.filters_initial_state,
        text: "",
        company: "all",
        category: "all",
        min_price: 0,
        price: state.filters.max_priceDy,
        shipping: false,
      };
      state.filtered_products = state.tempProducts;
    },
    productViewList: (state) => {
      state.products_view = true;
    },
    productViewGrid: (state) => {
      state.products_view = false;
    },
    productsSort: (state, action) => {
      state.sort_by = action.payload.sortType;
      if (state.sort_by === "by-default") {
        state.filtered_products = state.products;
        state.tempProducts = state.filtered_products;
      } else if (state.sort_by === "price-lowest") {
        state.filtered_products.sort((a, b) => a.price - b.price);
        state.tempProducts = state.filtered_products;
      } else if (state.sort_by === "price-highest") {
        state.filtered_products.sort((a, b) => b.price - a.price);
        state.tempProducts = state.filtered_products;
      } else if (state.sort_by === "name-a") {
        state.filtered_products.sort((a, b) => a.name.localeCompare(b.name));
        state.tempProducts = state.filtered_products;
      } else if (state.sort_by === "name-z") {
        state.filtered_products.sort((a, b) => b.name.localeCompare(a.name));
        state.tempProducts = state.filtered_products;
      }
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
