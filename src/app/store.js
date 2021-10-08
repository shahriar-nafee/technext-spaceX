import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../features/spacex/HomeSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});
