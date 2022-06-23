import { configureStore } from "@reduxjs/toolkit";
import controlColorReducer from "../slices/controlColorSlice";
import authReducer from "../slices/authSlice";

const rootReducer = {
  controlColor: controlColorReducer,
  auth: authReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
