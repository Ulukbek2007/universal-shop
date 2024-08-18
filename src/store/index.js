import { configureStore } from "@reduxjs/toolkit";
import getPathSlices from "./slices/getPathSlices";
import getDataSlices from "./slices/getDataSlices";
import toHeart from "./slices/toHeart";

const store=configureStore({
    reducer:{
        getPathSlices:getPathSlices.reducer,
        getData:getDataSlices.reducer,
        heart:toHeart.reducer
    }
});
export default store;