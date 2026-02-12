import { createSlice } from "@reduxjs/toolkit";
import { createUser, deleteUser, fetchUsers, updateUser } from "./userThunks";

const initialState = {
  data: [],
  isLoading: {
    create: false,
    fetch: false,
    update: false,
    delete: false,
  },
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Create
      .addCase(createUser.pending, (state) => {
        state.isLoading.create = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading.create = false;
        state.data.unshift(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading.create = false;
        state.error = action.payload;
      })

      // Read
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading.fetch = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading.fetch = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading.fetch = false;
        state.error = action.payload;
      })

      // Update
      .addCase(updateUser.pending, (state) => {
        state.isLoading.update = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading.update = false;
        const { id, data } = action.payload;
        const idx = state.data.findIndex((u) => u.id === id);
        if (idx !== -1) {
          state.data[idx] = { ...state.data[idx], ...data };
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Delete
      .addCase(deleteUser.pending, (state) => {
        state.isLoading.delete = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading.delete = false;
        const id = action.payload;
        state.data = state.data.filter((u) => u.id !== id);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading.delete = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
