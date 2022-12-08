import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../utils/axiosInstance";

const initialState = {
  token: "",
  error: "",
  loading: false,
};

export const registration = createAsyncThunk(
  "user/auth/registr",
  async (data, thunkApi) => {
    try {
      const response = await axiosInstance.post("/registr", { ...data });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "user/auth/login",
  async (data, thunkApi) => {
    try {
      const response = await axiosInstance.post("/login", { ...data });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.error = "";
        state.loading = false;
        state.token = action.payload.token;
      })
      .addCase(registration.rejected, (state) => {
        state.error = "";
        state.loading = false;
        state.token = "";
      });

    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = "";
      })

      .addCase(login.fulfilled, (state, action) => {
        state.error = "";
        state.loading = false;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state) => {
        state.error = "";
        state.loading = false;
        state.token = "";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
