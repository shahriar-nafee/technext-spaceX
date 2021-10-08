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
    loading: null,
  },
  reducers: {},
  extraReducers: {
    [fetchHomeData.pending]: (state) => {
      state.loading = "loading";
    },
    [fetchHomeData.fulfilled]: (state, { payload }) => {
      state.loading = "success";
      state.data = payload;
    },
    [fetchHomeData.rejected]: (state) => {
      state.loading = "failed";
    },
  },
});

export default homeSlice.reducer;
