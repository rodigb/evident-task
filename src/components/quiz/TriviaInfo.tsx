import { Alert, Box, Button, Container } from "@mui/material";
import { Album } from "../landingPage/interface";
import { useAppDispatch } from "../../hooks";
import { quizSlice } from "./quiz.slice";

function TriviaInfo({
  correctAlbum,
  isCorrect,
  isWrong,
}: {
  correctAlbum: Album | null;
  isCorrect: boolean;
  isWrong: boolean;
}) {
  const dispatch = useAppDispatch();

  return (
    <>
      {isWrong && !isCorrect && (
        <Container
          sx={{
            bgcolor: "#ffe5e5",
            border: "1px solid #f44336",
            borderRadius: 2,
            boxShadow: 3,
            p: 3,
            textAlign: "center",
            color: "#d32f2f",
            fontWeight: "bold",
            fontSize: "1.1rem",
            maxWidth: { xs: "95%", sm: "500px" },
          }}
        >
          Sorry, your answer is incorrect. Please try again.
        </Container>
      )}

      {isCorrect && correctAlbum && (
        <Container
          sx={{
            border: "1px solid #4CAF50",
            bgcolor: "#e8f5e9",
            borderRadius: 2,
            boxShadow: 3,
            p: 3,
            textAlign: "center",
            color: "#2e7d32",
            maxWidth: { xs: "95%", sm: "500px" },
          }}
        >
          <Box sx={{ fontSize: "1.3rem", fontWeight: "bold", mb: 1 }}>
            That is Correct!
          </Box>
          <Box sx={{ mb: 2 }}>
            <strong>{correctAlbum.name}</strong> was released in{" "}
            {correctAlbum.year_released}, featuring {correctAlbum.tracks}{" "}
            tracks, with a total length of {correctAlbum.length}.
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button
              variant="contained"
              color="success"
              sx={{ color: "#ffffff", "&:hover": { color: "#ffffff" } }}
              onClick={() => {
                dispatch(quizSlice.actions.incrementRoundCount());
              }}
            >
              Next Question
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                dispatch(quizSlice.actions.quizEnded());
              }}
            >
              End Quiz
            </Button>
          </Box>
        </Container>
      )}
    </>
  );
}

export default TriviaInfo;
