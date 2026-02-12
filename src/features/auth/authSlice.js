import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { getProfile, login } from "./authThunk";

const STORAGE_KEY = "local_session";

const loadSession = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const saveSession = (session) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
};

const clearSession = () => localStorage.removeItem(STORAGE_KEY);

export const loginLocal = createAsyncThunk(
  "auth/loginLocal",
  async ({ username, password }, { rejectWithValue }) => {
    // contoh sederhana: validasi lokal
    const ADMIN_USER = "admin";
    const ADMIN_PASS = "admin123";

    if (username !== ADMIN_USER || password !== ADMIN_PASS) {
      return rejectWithValue("Username atau password salah");
    }

    const session = {
      token: nanoid(32), // fake token
      user: { username, role: "admin" },
      createdAt: Date.now(),
    };

    saveSession(session);
    return session;
  }
);

const initialSession = loadSession();

const initialState = {
  user: initialSession?.user ?? null,
  token: initialSession?.token ?? null,
  isAuthenticated: !!initialSession,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;

        localStorage.setItem("token", action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
