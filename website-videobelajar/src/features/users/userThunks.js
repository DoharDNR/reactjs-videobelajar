import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserApi, fetchUsersApi } from "./userService";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchUsersApi();
      console.log("usersThunks", data);

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

export const createUser = createAsyncThunk(
  "users/createUser",
  async (payload, { rejectWithValue }) => {
    try {
      return await createUserApi(payload);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
