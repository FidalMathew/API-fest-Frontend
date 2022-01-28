import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  auth: authReducer,
  user: userReducer,
});
