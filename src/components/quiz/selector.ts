import { RootState } from "../../store";

export const selectCorrectCount = (state: RootState) => state.quiz.correctCount;
export const selectIncorrectCount = (state: RootState) =>
  state.quiz.incorrectCount;
export const selectRoundCount = (state: RootState) => state.quiz.roundCount;
export const selectQuizEnded = (state: RootState) => state.quiz.quizEnded;