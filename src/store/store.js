import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import navBarSlice from "./navBarSlice";
export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    navBar: navBarSlice.reducer,
  },
});
