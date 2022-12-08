import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  error: null,
  loading: false,
};

export const addCartItem = createAsyncThunk(
  "cart/post",
  async (productId, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId
        }),
      });
      const newItem = await res.json();
      if (newItem.error) {
        return thunkAPI.rejectWithValue(newItem.error);
      }
      return thunkAPI.fulfillWithValue(newItem);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCartItems = createAsyncThunk(
  "cart/get",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/cart");
      const cart = await res.json();
      if (cart.error) {
        return thunkAPI.rejectWithValue(cart.error);
      }
      return thunkAPI.fulfillWithValue(cart);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/delete",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/cart/${id}`, { method: "DELETE" });
      const cart = await res.json();
      if (cart.error) {
        return thunkAPI.rejectWithValue(cart.error);
      }
      return thunkAPI.fulfillWithValue(cart);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
      })
      .addCase(addCartItem.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCartItem.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addCartItem.fulfilled, (state, action) => {
        state.loading = false;
        const inCart = state.items.find((item) => item.productId === action.payload.productId);
        if(!inCart) {
          state.items.push(action.payload);
          state.totalPrice += action.payload.price;
          console.log("added")
        } else {
          console.log("not added")
        }
        
      })
      .addCase(deleteCartItem.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((item) => item._id !== action.payload._id);
        state.totalPrice -= action.payload.price;
      });
  },
});

export default cartSlice.reducer;
