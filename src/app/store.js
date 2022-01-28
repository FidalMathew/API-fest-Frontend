import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/Auth/authSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
  }
  // user: userReducer,
});
