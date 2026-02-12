import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserApi, fetchUsersApi, updateUserApi } from "./userService";

// Create
export const createUser = createAsyncThunk(
  "users/create",
  async (payload, { rejectWithValue }) => {
    try {
      return await createUserApi(payload);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Read
export const fetchUsers = createAsyncThunk(
  "users/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchUsersApi();

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

// Update
export const updateUser = createAsyncThunk(
  "users/update",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const updateFields = await updateUserApi({ id, data });
      return { id, data: updateFields };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Delete
export const deleteUser = createAsyncThunk(
  "users/delete",
  async (id, { rejectWithValue }) => {
    try {
      return await updateUserApi(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
