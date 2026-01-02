import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsersApi } from "./userService";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchUsersApi(import.meta.env.VITE_API_AUTH);
      return data
        ? Object.entries(data).map(([id, value]) => ({
            id,
            ...value,
          }))
        : [];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
