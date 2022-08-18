import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDevice } from "../../types";

const LS_FAV_DEV = "lfd";
interface favouritesState {
  favourites: IDevice[];
}

const initialState: favouritesState = {
  favourites: JSON.parse(localStorage.getItem(LS_FAV_DEV) ?? "[]"),
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFovourite(state, action: PayloadAction<IDevice>) {
      state.favourites.push(action.payload);
      localStorage.setItem(LS_FAV_DEV, JSON.stringify(state.favourites));
      console.log(1);
    },
    removeFavourite(state, action: PayloadAction<IDevice>) {
      state.favourites = state.favourites.filter(
        (fav) => fav.id !== action.payload.id
      );
      localStorage.setItem(LS_FAV_DEV, JSON.stringify(state.favourites));
    },
  },
});

export const favouriteActions = favouritesSlice.actions;
export const favouritesReducers = favouritesSlice.reducer;