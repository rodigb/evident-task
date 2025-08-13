import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// Update the import path below if your store file is located elsewhere
import type { RootState } from "../store";

// Define a type for the slice state
interface informationState {
  name: string;
  email: string
}

// Define the initial state using that type
const initialState: informationState = {
  name: "",
  email: ""
};

export const informationSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
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

// Other code such as selectors can use the imported `RootState` type
export const selectName = (state: RootState) => state.registerReducer.name;
export const selectEmail = (state: RootState) => state.registerReducer.email;

export default informationSlice.reducer;
