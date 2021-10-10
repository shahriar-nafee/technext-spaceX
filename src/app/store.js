import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../features/spacex/HomeSlice";
import detailReducer from "../features/spacexDetail/DetailSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    detail: detailReducer,
  },
});
