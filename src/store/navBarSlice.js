import { createSlice } from "@reduxjs/toolkit";

export const navBarSlice = createSlice({
  name: "products",
  initialState: { isOpen: false },
  reducers: {
    toggleNavbar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const navBarActions = navBarSlice.actions;

export default navBarSlice;
