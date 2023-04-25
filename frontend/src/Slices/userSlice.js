import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../baseUrl";
import { toast } from "react-toastify";

export const registerUser = createAsyncThunk(
  "user/register",
  async (formData, { rejectWithValue, getState, dispatch }) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/register`, formData);
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      return userDetails;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      toast(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (formData, { rejectWithValue, getState, dispatch }) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, formData);
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      return userDetails;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      toast(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

const userSlice = createSlice({
  name: "User",
  //   initialState: { user: JSON.parse(localStorage.getItem("user")) },
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.user = null;
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true;
        state.user = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
