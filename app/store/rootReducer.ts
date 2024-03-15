import { combineReducers } from "@reduxjs/toolkit";
import homeSlice from "../../src/features/products/redux/products.slice";

const appReducer = combineReducers({
  home: homeSlice,
});

export default appReducer;
