import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/authApi.js";
// import alertReducer from "../slice/alertSlice.js";
const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    // alert: alertReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
