import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, getProfilApi } from "./authService";
import { generateToken } from "../../utils/generateToken";

export const login = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const user = await loginApi(payload);
      const token = generateToken(user);

      console.log("authThunk", user, token);
      return { user, token };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message);
    }
  }
);

export const getProfile = createAsyncThunk(
  "auth/profile",
  async (_, { rejectWithValue }) => {
    try {
      return await getProfilApi();
    } catch (err) {
      return rejectWithValue(err.response?.data?.message);
    }
  }
);
