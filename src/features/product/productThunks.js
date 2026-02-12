import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductApi } from "./productService";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchProductApi();
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
