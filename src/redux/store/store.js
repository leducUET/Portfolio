import { configureStore } from "@reduxjs/toolkit";
import controlColorReducer from "../slices/controlColorSlice";

const rootReducer = {
  controlColor: controlColorReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
