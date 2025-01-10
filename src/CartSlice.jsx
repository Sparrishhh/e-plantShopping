// CartSlice.jsx

import { createSlice } from '@reduxjs/toolkit';

// Initial state of the cart
const initialState = {
  items: [],
};

// Create a slice of the Redux store for managing the cart
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add an item to the cart
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity; // If item already exists, increase the quantity
      } else {
        state.items.push(action.payload); // If item doesn't exist, add it to the cart
      }
    },

    // Remove an item from the cart by its id
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    // Update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = quantity; // Update the quantity
      }
    },
  },
});

// Export actions
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
