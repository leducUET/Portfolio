import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "controlColor",
  initialState: {
    theme: "dark",
    color: "red",
  },
  reducers: {
    changeTheme: (state, action) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
    changeColor: (state, action) => {},
  },
});

export const { changeColor, changeTheme } = studentSlice.actions;
export default studentSlice.reducer;
