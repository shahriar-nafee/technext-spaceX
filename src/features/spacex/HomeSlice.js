import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const nameSpace = "home";

export const fetchHomeData = createAsyncThunk(
  `${nameSpace}/fetchHomeData`,
  async (launch_status) => {
    let url = "https://api.spacexdata.com/v3/launches";
    if (launch_status !== "") {
      url += `?launch_success=${launch_status}`;
      console.log(url);
    }
    console.log(url);
    const { data } = await axios.get(url);
    return data;
  }
);

const homeSlice = createSlice({
  name: nameSpace,
  initialState: {
    data: null,
    status: null,
    launch_status: "",
  },
  reducers: {
    changeLaunchStatus: (state, action) => {
      state.launch_status = action.payload;
    },
  },
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

export const { changeLaunchStatus } = homeSlice.actions;

export default homeSlice.reducer;
