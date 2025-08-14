import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchArtistDetails } from "./actions";
import { chosenArtist } from "./selectors";
import QuizOptions from "./QuizOptions";
import Quiz from "../quiz/Quiz";
import { selectEmail, selectName } from "../register/selector";
import Register from "../register/Register";

function LandingPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArtistDetails());
  }, [dispatch]);

  const chosenArtistSelector = useAppSelector(chosenArtist);
  const userName = useAppSelector(selectName);
  const userEmail = useAppSelector(selectEmail);

  const isMissingUserInfo = !userName || userEmail === "";
  const isBeatlesQuiz = chosenArtistSelector === "The Beatles";

  const renderContent = () => {
    if (isMissingUserInfo) {
      return <Register />;
    }
    if (isBeatlesQuiz) {
      return <Quiz />;
    }

    return <QuizOptions />;
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#222A43",
      }}
    >
      <Container
        sx={{
          bgcolor: "#222A43",
          height: "80vh",
          border: "2px solid #FFFFFF",
          display: "flex",
          justifyContent: "flex",
          flexDirection: "column",
          p: 2,
          boxShadow: 11,
        }}
      >
        {renderContent()}
      </Container>
    </Box>
  );
}

export default LandingPage;
