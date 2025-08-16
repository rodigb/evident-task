import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../hooks";
import {
  selectCorrectCount,
  selectIncorrectCount,
  selectRoundCount,
} from "./selector";

function QuizSummary() {
  const incorrectCount = useAppSelector(selectIncorrectCount);
  const correctCount = useAppSelector(selectCorrectCount);
  const roundCount = useAppSelector(selectRoundCount);
  const totalAnswers = correctCount + incorrectCount;

  const summaryBox = (count: number, text: string) => {
    return (
      <Box
        sx={{
          width: 400,
          border: "1px solid #4CAF50",
          bgcolor: "#222A43",

          p: 3,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" fontSize={100} sx={{ color: "#FF7129" }}>
          {count}
        </Typography>
        <Typography variant="body1" sx={{ color: "white" }}>
          {text}
        </Typography>
      </Box>
    );
  };

  return (
    <>
      <Container
        sx={{
          border: "1px solid #4CAF50",
          bgcolor: "#e8f5e9",
          borderRadius: 2,
          boxShadow: 3,
          p: 3,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography>You made...</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            gap: 2,
          }}
        >
          {summaryBox(incorrectCount, "Incorrect Answers")}
          {summaryBox(correctCount, "Correct Answers")}
          {summaryBox(roundCount, "Total Rounds")}
          {summaryBox(totalAnswers, "Total Answers")}
        </Box>
      </Container>
    </>
  );
}

export default QuizSummary;
