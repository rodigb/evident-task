import { Box, Container } from "@mui/material";
import React from "react";

function QuizSummary() {
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
          color: "#2e7d32",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {" "}
        <Box
          sx={{
            width: 400,
            border: "1px solid #4CAF50",
            bgcolor: "#e8f5e9",
            borderRadius: 2,
            boxShadow: 3,
            p: 3,
            textAlign: "center",
            color: "#2e7d32",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></Box>
        <Box
          sx={{
            width: 400,
            border: "1px solid #4CAF50",
            bgcolor: "#e8f5e9",
            borderRadius: 2,
            boxShadow: 3,
            p: 3,
            textAlign: "center",
            color: "#2e7d32",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></Box>
        <Box
          sx={{
            width: 400,
            border: "1px solid #4CAF50",
            bgcolor: "#e8f5e9",
            borderRadius: 2,
            boxShadow: 3,
            p: 3,
            textAlign: "center",
            color: "#2e7d32",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></Box>
      </Container>
    </>
  );
}

export default QuizSummary;
