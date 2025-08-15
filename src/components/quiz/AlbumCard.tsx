import { Box, Button } from "@mui/material";

function AlbumCard({
  albumCoverPath,
  albumCoverName,
}: {
  albumCoverPath: string;
  albumCoverName: string;
}) {
  console.log(albumCoverPath);
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
        src={`https://frontend-interview.evidentinsights.com/${albumCoverPath}`}
        alt="Album Cover"
      />
    </Box>
  );
}

export default AlbumCard;
