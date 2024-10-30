import { createSlice } from '@reduxjs/toolkit';

// Helper functions for local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.error('Could not load state', e);
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cart', serializedState);
  } catch (e) {
    console.error('Could not save state', e);
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadState(),
  reducers: {
    addToCart: (state, action) => {
      const { id, color, size } = action.payload;
      const existingItem = state.find(
        (item) => item.id === id && item.color === color && item.size === size
      );

      if (existingItem) {
        // Nếu sản phẩm đã tồn tại, chỉ cần cập nhật số lượng
        existingItem.quantity += 1; // Tăng số lượng lên 1
      } else {
        // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
        state.push(action.payload);
      }
      saveState(state);
    },
    updateQuantity: (state, action) => {
      const { id, color, size, quantity } = action.payload;
      const item = state.find(
        (item) => item.id === id && item.color === color && item.size === size
      );
      if (item) {
        item.quantity = quantity;
        saveState(state);
      }
    },
    removeItem: (state, action) => {
      const { id, color, size } = action.payload;
      const newState = state.filter(
        (item) =>
          !(item.id === id && item.color === color && item.size === size)
      );
      saveState(newState);
      return newState;
    },
    clearCart: (state) => {
      // Xóa toàn bộ sản phẩm trong giỏ hàng
      saveState([]); // Lưu trạng thái rỗng vào localStorage
      return []; // Trả về trạng thái giỏ hàng rỗng
    },
  },
});

export const { addToCart, updateQuantity, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
