// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { id, color, size, quantity } = action.payload;
      const existingItem = state.find(
        (item) => item.id === id && item.color === color && item.size === size
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.push(action.payload);
      }
    },
    updateQuantity: (state, action) => {
      const { id, color, size, quantity } = action.payload;
      const item = state.find(
        (item) => item.id === id && item.color === color && item.size === size
      );
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addToCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
