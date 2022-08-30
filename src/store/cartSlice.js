import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAddedItems: 0,
    totalAmount: 0,
    shippingAmount: 500,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      const isExist = state.items.find((item) => item.id === newItem.id);
      state.totalAddedItems = state.totalAddedItems + newItem.quantity;
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
      state.totalAmount = state.items.reduce(
        (previousValue, currentValue) => previousValue + currentValue.subTotal,
        0
      );
    },
    addToCartOneByOne: (state, action) => {
      const addedItemId = action.payload;
      const addedItem = state.items.find((item) => item.id === addedItemId.id);
      if (addedItem.quantity === addedItem.stock) return;
      addedItem.quantity++;
      addedItem.subTotal = addedItem.subTotal + addedItem.price;
      state.totalAddedItems++;
      state.totalAmount = state.items.reduce(
        (previousValue, currentValue) => previousValue + currentValue.subTotal,
        0
      );
    },
    removeFromCartOneByOne: (state, action) => {
      const addedItemId = action.payload;
      const addedItem = state.items.find((item) => item.id === addedItemId.id);
      if (addedItem.quantity === 1) return;
      addedItem.quantity--;
      addedItem.subTotal = addedItem.subTotal - addedItem.price;
      state.totalAddedItems--;
      state.totalAmount = state.items.reduce(
        (previousValue, currentValue) => previousValue + currentValue.subTotal,
        0
      );
    },
    removeOneItem: (state, action) => {
      const removedItemId = action.payload;
      const removedItem = state.items.find(
        (item) => item.id === removedItemId.id
      );
      state.totalAddedItems = state.totalAddedItems - removedItem.quantity;
      state.items = state.items.filter((item) => item.id !== removedItemId.id);
      state.totalAmount = state.items.reduce(
        (previousValue, currentValue) => previousValue + currentValue.subTotal,
        0
      );
    },
    removeAllItems: (state) => {
      state.totalAddedItems = 0;
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
