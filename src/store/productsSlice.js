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
      min_price: 0,
      max_price: 0,
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
      state.filters.companies = [
        "all",
        ...new Set(state.filtered_products.map((val) => val.company)),
      ];
      state.filters.categories = [
        "all",
        ...new Set(state.filtered_products.map((val) => val.category)),
      ];
    },
    searchHandler: (state, action) => {
      state.filters_initial_state.text = action.payload.searchValue;

      if (state.filters_initial_state.text.length === 0) {
        state.filtered_products = state.tempProducts;
      }
      state.filtered_products = state.filtered_products.filter((product) =>
        product.name
          .toLowerCase()
          .startsWith(state.filters_initial_state.text.toLowerCase())
      );
    },
    catagoriesHandler: (state, action) => {
      const category = action.payload.categoryValue;
      state.filters_initial_state.category = category;
      if (category === "all") {
        state.filtered_products = state.tempProducts;
      } else {
        state.filtered_products = state.tempProducts;
        state.filtered_products = state.filtered_products.filter(
          (product) =>
            product.category.toLowerCase() ===
            state.filters_initial_state.category
        );
      }
    },
    companiesHandler: (state, action) => {
      const company = action.payload.companyValue.toLowerCase();
      state.filters_initial_state.company = company;
      if (company === "all") {
        state.filtered_products = state.tempProducts;
      } else {
        state.filtered_products = state.tempProducts;
        state.filtered_products = state.filtered_products.filter(
          (product) =>
            product.company.toLowerCase() ===
            state.filters_initial_state.company
        );
      }
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
        state.tempProducts = state.products;
      } else if (state.sort_by === "price-lowest") {
        state.filtered_products.sort((a, b) => a.price - b.price);
        state.tempProducts.sort((a, b) => a.price - b.price);
      } else if (state.sort_by === "price-highest") {
        state.filtered_products.sort((a, b) => b.price - a.price);
        state.tempProducts.sort((a, b) => b.price - a.price);
      } else if (state.sort_by === "name-a") {
        state.filtered_products.sort((a, b) => a.name.localeCompare(b.name));
        state.tempProducts.sort((a, b) => a.name.localeCompare(b.name));
      } else if (state.sort_by === "name-z") {
        state.filtered_products.sort((a, b) => b.name.localeCompare(a.name));
        state.tempProducts.sort((a, b) => b.name.localeCompare(a.name));
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
