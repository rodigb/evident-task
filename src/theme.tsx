import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#222A43",
      paper: "#222A43",
    },
    primary: {
      main: "#FF7129",
    },
    success: {
      main: "#4CAF50",
      contrastText: "#2e7d32",
    },
    error: {
      main: "#f44336",
      contrastText: "#d32f2f",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            color: "#A6A6A6",
          },
          "& label.Mui-focused": {
            color: "#ffffff",
          },
          "& input": {
            color: "#ffffff",
            padding: "12px 12px",
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: 0,
            "& fieldset": {
              border: "none",
            },
            borderBottom: "2px solid white",
            "&:hover": {
              borderBottom: "2px solid white",
            },
            "&.Mui-focused": {
              borderBottom: "2px solid white",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderColor: "#FF7129",
          color: "#FF7129",
          borderRadius: 4,
          borderWidth: 2,
          "&:hover": {
            borderColor: "#FF8B52",
            color: "#FF8B52",
            boxShadow: 3,
          },
          "&.Mui-disabled": {
            borderColor: "#555",
            color: "#777",
            opacity: 0.7,
            backgroundColor: "#2a2a40",
          },
        },
      },
    },
  },
});

export default theme;
