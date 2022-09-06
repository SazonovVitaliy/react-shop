import { createSlice } from "@reduxjs/toolkit";

const LS_SET_USER = "lsu";
const LOGIN = "logu";
const EMAIL = "uemail";

interface IUser {
  email: string;
  token: string | null;
  id: string | null;
  isAuth: boolean;
}

const initialState: IUser = {
  email: JSON.parse(localStorage.getItem(EMAIL) ?? "[]"),
  token: null,
  id: null,
  isAuth: JSON.parse(localStorage.getItem(LOGIN) ?? "false"),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.isAuth = action.payload.isAuth;
      localStorage.setItem(LOGIN, "true");
      localStorage.setItem(EMAIL, JSON.stringify(state.email));
      localStorage.setItem(LS_SET_USER, JSON.stringify(state));
    },
    removeUser(state) {
      state.email = "";
      state.id = null;
      state.token = null;
      state.isAuth = false;
      localStorage.setItem(LOGIN, "false");
      localStorage.setItem(LS_SET_USER, "null");
    },
  },
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
