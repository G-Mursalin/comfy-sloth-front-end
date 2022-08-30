import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    shippingAmount: 500,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const isExist = state.items.find((item) => item.id === newItem.id);
      if (!isExist) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
          quantity: newItem.quantity,
          stock: newItem.stock,
          subTotal: newItem.price * newItem.quantity,
        });
      } else {
        if (!isExist.quantity + newItem.quantity <= isExist.stock) return;
        isExist.quantity = isExist.quantity + newItem.quantity;
        isExist.subTotal = isExist.subTotal + newItem.price * newItem.quantity;
      }
    },
    addToCartOneByOne: (state, action) => {
      const addedItemId = action.payload;
      const addedItem = state.items.find((item) => item.id === addedItemId.id);
      if (addedItem.quantity === addedItem.stock) return;
      addedItem.quantity++;
      addedItem.subTotal = addedItem.subTotal + addedItem.price;
    },
    removeFromCartOneByOne: (state, action) => {
      const addedItemId = action.payload;
      const addedItem = state.items.find((item) => item.id === addedItemId.id);
      if (addedItem.quantity === 1) return;
      addedItem.quantity--;
      addedItem.subTotal = addedItem.subTotal - addedItem.price;
    },
    removeOneItem: (state, action) => {
      const removedItemId = action.payload;
      state.items = state.items.filter((item) => item.id !== removedItemId.id);
    },
    removeAllItems: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
    setItemsInitialValue: (state, action) => {
      state.items = action.payload.savedData;
    },
    saveCartItemsToLocalStorage: (state) => {
      localStorage.setItem("comfy-sloth-cart", JSON.stringify(state.items));
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
