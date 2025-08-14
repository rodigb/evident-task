import { Box, Container } from "@mui/material";
import AlbumCard from "./AlbumCard";

function Quiz() {
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
        <AlbumCard cover="cover_image_url" />
      </Box>
    </Container>
  );
}

export default Quiz;
