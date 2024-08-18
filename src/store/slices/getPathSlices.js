import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "",
};
const getPathSlices = createSlice({
  name: "getPathSlices",
  initialState,
  reducers: {
    getLocation: (state, { payload }) => {
      state.value = payload;
    },
  },
});
export const {getLocation}=getPathSlices.actions;
export default getPathSlices;
