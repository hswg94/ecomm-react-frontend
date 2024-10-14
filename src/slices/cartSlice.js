import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [], shippingAddress: {}, paymentMethod: "Paypal" };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existsItem = state.cartItems.find((x) => x._id === item._id);

      existsItem
        ? (existsItem.qty += item.qty)
        : (state.cartItems = [...state.cartItems, item]);

      return updateCart(state);
    },
    setQuantity: (state, action) => {
      const item = action.payload;
      const existsItem = state.cartItems.find((x) => x._id === item._id);

      if (existsItem) {
        // If the item already exists in the cart, update its quantity
        existsItem.qty = item.qty;
      } else {
        // If the item doesn't exist in the cart, add it
        state.cartItems = [...state.cartItems, item];
      }
      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload; // This should be the _id
      state.cartItems = state.cartItems.filter((x) => x._id !== itemIdToRemove);
      return updateCart(state);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      return updateCart(state);
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      return updateCart(state);
    },
    clearCartItems: (state) => {
      state.cartItems = [];
      return updateCart(state);
    },
    resetCart: (state) => (state = initialState)
  },
});

export const {
  addToCart,
  removeFromCart,
  setQuantity,
  saveShippingAddress,
  savePaymentMethod,
  clearCartItems,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
