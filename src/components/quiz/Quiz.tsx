import { Box, Button, Container } from "@mui/material";
import { selectAlbums } from "../landingPage/selectors";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect, useState } from "react";
import TriviaInfo from "./TriviaInfo";
import { Album } from "../landingPage/interface";
import { selectQuizEnded, selectRoundCount } from "./selector";
import { quizSlice } from "./quiz.slice";
import QuizSummary from "./QuizSummary";

function Quiz() {
  const dispatch = useAppDispatch();

  const roundCount = useAppSelector(selectRoundCount);

  const [question, setQuestion] = useState<{
    correct: string;
    options: string[];
  } | null>(null);

  const [albumCoverPath, setAlbumCoverPath] = useState("");
  const [wrongGuesses, setWrongGuesses] = useState<Set<string>>(new Set());

  const [correctChosen, setCorrectChosen] = useState(false);
  const albumSelector = useAppSelector(selectAlbums);
  const quizEnded = useAppSelector(selectQuizEnded);

  console.log(quizEnded);

  const [correctAlbumInfo, setCorrectAlbumInfo] = useState<Album | null>(null);

  useEffect(() => {
    if (!albumSelector.length) return;

    const correctAlbum =
      albumSelector[Math.floor(Math.random() * albumSelector.length)];
    const correctName = correctAlbum.name;

    setCorrectAlbumInfo(correctAlbum);

    const names = albumSelector.map((a) => a.name);
    const incorrect = names.filter((n) => n !== correctName);
    const picks = incorrect.slice(0, 2);
    const options = [...picks, correctName].sort(() => Math.random() - 0.5);

    setQuestion({ correct: correctName, options });
    setAlbumCoverPath(correctAlbum.cover_image_path);
    setWrongGuesses(new Set());
    setCorrectChosen(false);
  }, [albumSelector, roundCount]);

  const handleClick = (option: string) => {
    if (!question) return;
    if (option === question.correct) {
      setCorrectChosen(true);
      dispatch(quizSlice.actions.incrementCorrectCount());
    } else {
      setWrongGuesses((prev) => new Set(prev).add(option));
      dispatch(quizSlice.actions.incrementIncorrectCount());
    }
  };

  return quizEnded ? (
    <QuizSummary />
  ) : (
    <>
      <Container
        sx={{
          bgcolor: "#222A43",
          p: { xs: 3, sm: 2 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: { xs: "95%", sm: "500px" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: "200px",
                height: "200px",
                border: "1px solid #fff",
                borderRadius: "8px",
                overflow: "hidden",
              }}
              component="img"
              src={`https://frontend-interview.evidentinsights.com/${albumCoverPath}`}
              alt="Album Cover"
            />
          </Box>
          {question?.options.map((option) => (
            <Button
              key={option}
              variant="outlined"
              disabled={correctChosen}
              sx={{
                width: "200px",
                fontWeight: "bold",
                bgcolor:
                  correctChosen && option === question?.correct
                    ? "#4CAF50"
                    : wrongGuesses.has(option)
                    ? "#F44336"
                    : "transparent",
                borderColor: "#FF7129",
                color: "white",
                borderRadius: 4,
                borderWidth: 2,
              }}
              onClick={() => handleClick(option)}
            >
              {option}
            </Button>
          ))}
        </Box>
      </Container>
      <TriviaInfo
        correctAlbum={correctAlbumInfo}
        isCorrect={correctChosen}
        isWrong={wrongGuesses.size > 0}
      />
    </>
  );
}

export default Quiz;
