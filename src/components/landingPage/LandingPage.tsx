import { Container, List, ListItemButton, Typography } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchArtistDetails } from "./actions";
import { selectAlbums, selectArtist } from "./selectors";

function LandingPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArtistDetails());
  }, [dispatch]);

  const albumSelector = useAppSelector(selectAlbums);
  const artistSelector = useAppSelector(selectArtist);

  console.log(albumSelector);
  console.log(artistSelector);

  return (
    <Container
      sx={{
        bgcolor: "#222A43",
        height: "50vh",
        border: "2px solid #FFFFFF",
        display: "flex",
        p: 2,
        boxShadow: 11,
      }}
    >
      <List component="div" disablePadding>
        <ListItemButton
          sx={{
            height: "250px",
            width: "250px",
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "white" }}>The Beatles</Typography>
        </ListItemButton>
      </List>
    </Container>
  );
}

export default LandingPage;
