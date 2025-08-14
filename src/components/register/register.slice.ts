import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

 interface informationState {
  name: string;
  email: string
}

 const initialState: informationState = {
  name: "",
  email: ""
};

export const informationSlice = createSlice({
  name: "information",
   initialState,
  reducers: {
    name: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    email: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { name, email } = informationSlice.actions;

 export const selectName = (state: RootState) => state.register.name;
export const selectEmail = (state: RootState) => state.register.email;

export default informationSlice.reducer;
