import { Box, Button, Container, Typography } from "@mui/material";
import { useAppSelector } from "../../hooks";
import {
  selectCorrectCount,
  selectIncorrectCount,
  selectRoundCount,
} from "./selector";
import { selectName } from "../register/register.slice";

function QuizSummary() {
  const incorrectCount = useAppSelector(selectIncorrectCount);
  const correctCount = useAppSelector(selectCorrectCount);
  const roundCount = useAppSelector(selectRoundCount);
  const name = useAppSelector(selectName);

  const totalAnswers = correctCount + incorrectCount;

  const summaryBox = (count: number, text: string) => {
    return (
      <Box
        sx={{
          width: { xs: "100%", sm: "400px" },
          border: "1px solid #ffffffff",
          bgcolor: "#334066",
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
        <Typography
          variant="body1"
          fontSize={20}
          fontWeight={"bold"}
          sx={{ color: "white" }}
        >
          {text}
        </Typography>
      </Box>
    );
  };

  return (
    <>
      <Container
        sx={{
          p: 3,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" sx={{ color: "#ffffffff" }}>
          Congratulations {name || ""}
        </Typography>
        <Typography variant="h5" sx={{ color: "#FF7129" }}>
          You Made...
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            width: "100%",
            pt: 5,
            gap: 2,
          }}
        >
          {summaryBox(incorrectCount, "Incorrect Answers")}
          {summaryBox(correctCount, "Correct Answers")}
          {summaryBox(roundCount, "Total Rounds")}
          {summaryBox(totalAnswers, "Total Answers")}
        </Box>
        <Button
          variant="contained"
          sx={{
            width: "200px",
            fontWeight: "bold",
            bgcolor: "#FF7129",
            borderColor: "#FF7129",
            color: "white",
            borderRadius: 4,
            borderWidth: 2,
            mt: 10,
          }}
        >
          Email Results
        </Button>
      </Container>
    </>
  );
}

export default QuizSummary;
