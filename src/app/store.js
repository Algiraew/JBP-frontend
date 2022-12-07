import { configureStore } from "@reduxjs/toolkit";
import compareSlice from "../features/compare.slice";
import phoneSlice from "../features/phone.slice";
import cartSlice from "../features/cart.slice";

const store = configureStore({
  reducer: {
    phones: phoneSlice,
    compare: compareSlice,
    cart: cartSlice,
  },
});

export default store;
