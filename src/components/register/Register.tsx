import {
  Box,
  Button,
  Container,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useAppDispatch } from "../../hooks";
import { nameChange, emailChange } from "./asyncActions";
import React from "react";

const CustomTextField = styled(TextField)({
  "& label": {
    color: "#A6A6A6",
  },
  "& input": {
    color: "white",
    padding: "12px 12px",
  },
  "& label.Mui-focused": {
    color: "#ffffffff",
  },
  "& .placeholder": {
    color: "#ffffff",
  },
  "& .MuiInput-border": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
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
});

function Register() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const dispatch = useAppDispatch();

  function Register() {
    dispatch(nameChange(name));
    dispatch(emailChange(email));
  }
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
        <Typography
          sx={{
            color: "white",
            fontSize: "1.5rem",
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          Evident Guess The Album Cover
        </Typography>
        <CustomTextField
          label="Email"
          sx={{ width: "70%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomTextField
          label="Name"
          sx={{ width: "70%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          variant="outlined"
          sx={{
            borderColor: "#FF7129",
            color: "#FF7129",
            borderRadius: 4,
            borderWidth: 2,
          }}
          onClick={() => {
            Register();
          }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default Register;
