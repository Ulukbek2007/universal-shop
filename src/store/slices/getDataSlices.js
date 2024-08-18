import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getData = createAsyncThunk("getData", async () => {
  const { data } = await axios.get(
    "https://660a59950f324a9a2884bb7c.mockapi.io/data/fivetoone"
  );
  return data;
});
export const paramsData = createAsyncThunk("paramsData", async () => {
  const { data } = await axios.get(
    `https://660a59950f324a9a2884bb7c.mockapi.io/data/fivetoone`
  );
  return data;
});
export const similarData = createAsyncThunk("similarData", async () => {
  const { data } = await axios.get(
    `https://660a59950f324a9a2884bb7c.mockapi.io/data/fivetoone`
  );
  return data;
});
const initialState = {
  data: [],
  dataLoading: false,
  params: [],
  paramsLoading: false,
  similarProducts: [],
  similarProductLoading: false,
};
const getDataSlices = createSlice({
  name: "getDataSlices",
  initialState,
  extraReducers: (build) => {
    build
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.dataLoading = false;
      })
      build.addCase(similarData.fulfilled, (state, { payload }) => {
        state.similarProducts = payload;
        state.similarProductLoading = true;
      })
      build.addCase(paramsData.fulfilled, (state, { payload }) => {
        state.params = payload;
        state.paramsLoading = false;
      })
      build.addCase(paramsData.pending, (state) => {
        state.paramsLoading = true;
      })
      build.addCase(getData.pending, (state) => {
        state.dataLoading = true;
      })
      build.addCase(similarData.pending, (state) => {
        state.similarProductLoading = true;
      });
  },
});
export default getDataSlices;
