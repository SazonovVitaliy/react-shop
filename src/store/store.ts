import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./slices/userSlice";
import { favouritesReducers } from "./slices/favouritesSlice";
import { basketReducers } from "./slices/basketSlice";
import { devicesAPI } from "./../services/devicesService";

const rootReducer = combineReducers({
  user,
  favourites: favouritesReducers,
  basket: basketReducers,
  [devicesAPI.reducerPath]: devicesAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(devicesAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
