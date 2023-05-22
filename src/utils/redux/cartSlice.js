import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const pres = state.items.findIndex(
        (items) => items.menuItemId === action.payload.menuItemId
      );
      if (pres !== -1) {
        state.items[pres].quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      const pres = state.items.findIndex(
        (items) => items.menuItemId === action.payload.menuItemId
      );
      if (state.items[pres].quantity > 1) {
        state.items[pres].quantity -= 1;
      } else {
        state.items.splice(pres, 1);
      }
    },
    clearCart: () => {
      state.items = [];
    },
  },
});

export default cartSlice.reducer;
export const { addItem, clearCart, removeItem } = cartSlice.actions;
