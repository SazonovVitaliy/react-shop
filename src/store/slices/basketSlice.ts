import { createSlice } from "@reduxjs/toolkit";
import { IDevice } from "../../types";
import { PayloadAction } from "@reduxjs/toolkit";

export const LS_BD = "lbd";

interface basketState {
  basket: IDevice[];
}
const initialState: basketState = {
  basket: JSON.parse(localStorage.getItem(LS_BD) ?? "[]"),
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket(state, action: PayloadAction<IDevice>) {
      state.basket.push(action.payload);
      localStorage.setItem(LS_BD, JSON.stringify(state.basket));
    },
    deleteFromBasket(state, action: PayloadAction<IDevice>) {
      state.basket = state.basket.filter((bas) => bas.id !== action.payload.id);
      localStorage.setItem(LS_BD, JSON.stringify(state.basket));
    },
  },
});

export const basketActions = basketSlice.actions;
export const basketReducers = basketSlice.reducer;
