import { Box, Button } from "@mui/material";

function AlbumCard({ cover }: { cover: string }) {
  return (
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
        src={cover}
        alt="Album Cover"
      />

      <Button
        variant="outlined"
        sx={{
          borderColor: "#FF7129",
          color: "#FF7129",
          borderRadius: 4,
          borderWidth: 2,
        }}
      >
        Submit
      </Button>
    </Box>
  );
}

export default AlbumCard;
