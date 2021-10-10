import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const nameSpace = "detail";

export const fetchDetailData = createAsyncThunk(
  `${nameSpace}/fetchDetailData`,
  async (id) => {
    const { data } = await axios.get(
      `https://api.spacexdata.com/v3/launches/${id}`
    );
    return data;
  }
);

const detailSlice = createSlice({
  name: nameSpace,
  initialState: {
    data: null,
    status: null,
  },
  reducers: {},
  extraReducers: {
    [fetchDetailData.pending]: (state) => {
      state.status = "loading";
    },
    [fetchDetailData.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.data = payload;
    },
    [fetchDetailData.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default detailSlice.reducer;
