import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import productReducer from "../features/product/productSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    product: productReducer,
  },
});
