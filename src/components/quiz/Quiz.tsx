import { Box, Button, Container } from "@mui/material";
import { selectAlbums } from "../landingPage/selectors";
import { useAppSelector } from "../../hooks";
import { useEffect, useState } from "react";

function Quiz() {
  const [round, setRound] = useState(0);

  const [question, setQuestion] = useState<{
    correct: string;
    options: string[];
  } | null>(null);

  const [albumCoverPath, setAlbumCoverPath] = useState("");
  const [wrongGuesses, setWrongGuesses] = useState<Set<string>>(new Set());
  const [correctChosen, setCorrectChosen] = useState(false);

  const albumSelector = useAppSelector(selectAlbums);

  useEffect(() => {
    if (!albumSelector.length) return;

    const correctAlbum =
      albumSelector[Math.floor(Math.random() * albumSelector.length)];
    const correctName = correctAlbum.name;

    const names = albumSelector.map((a) => a.name);
    const incorrect = names.filter((n) => n !== correctName);
    const picks = incorrect.slice(0, 2);
    const options = [...picks, correctName].sort(() => Math.random() - 0.5);

    setQuestion({ correct: correctName, options });
    setAlbumCoverPath(correctAlbum.cover_image_path);
    setWrongGuesses(new Set());
    setCorrectChosen(false);
  }, [albumSelector, round]);

  const handleClick = (option: string) => {
    if (!question) return;
    if (option === question.correct) {
      setCorrectChosen(true);
      setTimeout(() => setRound((prev) => prev + 1), 600);
    } else {
      setWrongGuesses((prev) => new Set(prev).add(option));
    }
  };

  return (
    <Container
      sx={{
        bgcolor: "#222A43",
        p: { xs: 3, sm: 2 },
        border: "2px solid #FFFFFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: 11,
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
            variant="contained"
            sx={{
              bgcolor:
                correctChosen && option === question?.correct
                  ? "#4CAF50"
                  : wrongGuesses.has(option)
                  ? "#F44336"
                  : "#1976d2",
            }}
            onClick={() => handleClick(option)}
          >
            {option}
          </Button>
        ))}
      </Box>
    </Container>
  );
}

export default Quiz;
