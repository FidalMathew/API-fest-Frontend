import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/Auth/authSlice";
import userReducer from "./Features/User/UserSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});
