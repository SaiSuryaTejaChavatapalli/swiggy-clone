import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["Apple", "Banana", "Berry"],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: () => {
      state.items = [];
    },
  },
});

export default cartSlice.reducer;
export const { addItem, clearCart } = cartSlice.actions;
