import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const nameSpace = "home";

export const fetchHomeData = createAsyncThunk(
  `${nameSpace}/fetchHomeData`,
  async () => {
    const { data } = await axios.get("https://api.spacexdata.com/v3/launches");
    return data;
  }
);

const homeSlice = createSlice({
  name: nameSpace,
  initialState: {
    data: null,
    status: null,
  },
  reducers: {},
  extraReducers: {
    [fetchHomeData.pending]: (state) => {
      state.status = "loading";
    },
    [fetchHomeData.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.data = payload;
    },
    [fetchHomeData.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default homeSlice.reducer;
