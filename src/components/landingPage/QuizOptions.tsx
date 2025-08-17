import { Box, List, ListItemButton, Typography } from "@mui/material";
import { useAppDispatch } from "../../hooks";
import { setArtist } from "./landingPage.slice";

function QuizOptions() {
  const dispatch = useAppDispatch();

  return (
    <List
      component="div"
      disablePadding
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: { xs: "center", sm: "flex-start" },
        alignItems: "center",
      }}
    >
      <ListItemButton
        sx={{
          height: "250px",
          width: "250px",
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
          alignItems: "center",
          backgroundImage: `url(https://frontend-interview.evidentinsights.com/album_covers/01)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
        id={"The Beatles"}
        onClick={(e) => {
          dispatch(setArtist(e.currentTarget.id));
        }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            bgcolor: "#FF7129",
            p: 1,
          }}
        >
          <Typography sx={{ color: "white", fontWeight: "bold" }}>
            The Beatles
          </Typography>
        </Box>
      </ListItemButton>
    </List>
  );
}

export default QuizOptions;
