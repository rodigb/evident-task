import { createAsyncThunk } from "@reduxjs/toolkit";
import { increment } from "./register.slice";  

export const incrementCount = createAsyncThunk(
  "register/incrementCount",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(increment());
  }
);
