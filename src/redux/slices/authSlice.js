import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../../api/authAPI";
import { toast } from "react-toastify";

const user = JSON.parse(localStorage.getItem("user"));

export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  // @ts-ignore
  async ({ email, password }) => {
    try {
      const data = await authAPI.login({ email, password });
      return { user: data.user };
    } catch (error) {
      toast.error("Đăng nhập không thành công", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return error;
    }
  }
);

export const logoutAsync = createAsyncThunk("auth/logout", async () => {
  authAPI.logout();
});

const initialState = { user: user };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // @ts-ignore
    [loginAsync.fulfilled]: (state, action) => {
      if (action.payload.user) {
        state.user = action.payload.user;
      }
    },
    // @ts-ignore
    [loginAsync.rejected]: (state, action) => {
      state.user = null;
    },
    // @ts-ignore
    [logoutAsync.fulfilled]: (state, action) => {
      state.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
