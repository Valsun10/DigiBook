import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Auth/authSlice";
import bookSlice from "./Books/bookSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    books: bookSlice,
  },
});

export default store;
