import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import authSlice from "../features/auth.slice";
import cartSlice from "../features/cart.slice";
import compareSlice from "../features/compare.slice";
import phoneSlice from "../features/phone.slice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedAuth = persistReducer(persistConfig, authSlice)

const persistedCart = persistReducer(persistConfig, cartSlice)

export const store = configureStore({
  reducer: {
    phones: phoneSlice,
    compare: compareSlice,
    cart: persistedCart,
    auth: persistedAuth,
  },
});

export const persistor = persistStore(store);
