import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart.slice";
import compareSlice from "../features/compare.slice";
import phoneSlice from "../features/phone.slice";
import authSlice from "../features/auth.slice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
  };

const persistedAuth = persistReducer(persistConfig, authSlice)
const persistedCart = persistReducer(persistConfig, cartSlice)

const store = configureStore({
    reducer: {
        phones: phoneSlice,
        compare: compareSlice,
        cart: cartSlice,
        auth: persistedAuth,
    }
})

export const persistor = persistStore(store);

export default store

// import { configureStore } from "@reduxjs/toolkit";

// import cartSlice from "../features/cart.slice";
// import compareSlice from "../features/compare.slice";
// import phoneSlice from "../features/phone.slice";

// export const store = configureStore({
//   reducer: {
//     phones: phoneSlice,
//     compare: compareSlice,
//     cart: persistedCart,
//   },
// });