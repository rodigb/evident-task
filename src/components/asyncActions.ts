import { createAsyncThunk } from "@reduxjs/toolkit";
import { informationSlice } from "./register.slice";  

export const nameChange = createAsyncThunk(
  "register/nameChange",
  async (name: string, thunkAPI) => {
    thunkAPI.dispatch(informationSlice.actions.name(name));
  }
);
export const emailChange = createAsyncThunk(
  "register/emailChange",
  async (email: string, thunkAPI) => {
    thunkAPI.dispatch(informationSlice.actions.email(email));
  }
);
