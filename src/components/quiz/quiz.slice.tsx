import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  correctCount: 0,
  incorrectCount: 0,
  roundCount: 0,
  quizEnded: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    incrementRoundCount: (state) => {
      state.roundCount += 1;
    },
    incrementCorrectCount: (state) => {
      state.correctCount += 1;
    },
    incrementIncorrectCount: (state) => {
      state.incorrectCount += 1;
    },
    quizEnded: (state) => {
      state.quizEnded = true;
    },
  },
});

export default quizSlice.reducer;
