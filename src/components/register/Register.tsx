import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useAppDispatch } from "../../hooks";
import { nameChange, emailChange } from "./asyncActions";
import { ChangeEvent, useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const dispatch = useAppDispatch();

  function Register() {
    dispatch(nameChange(name));
    dispatch(emailChange(email));
  }
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value));
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    setNameError(validateName(value));
  };

  const validateEmail = (value: string): string => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return "Email is required";
    if (!regex.test(value)) return "Enter a valid email address";
    return "";
  };

  const validateName = (value: string): string => {
    if (!value) return "Name is required";
    return "";
  };
  const isDisabled =
    !email || !name || Boolean(emailError) || Boolean(nameError);

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
            color: "#FF7129",
            mb: 2,
            fontSize: "1.5rem",
            fontWeight: "bold",
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          Evident Guess The Album Cover
        </Typography>
        <TextField
          label="Email"
          sx={{ width: "70%" }}
          value={email}
          onChange={handleEmailChange}
          error={Boolean(emailError)}
          helperText={emailError}
        />
        <TextField
          label="Name"
          sx={{ width: "70%" }}
          value={name}
          onChange={handleNameChange}
          helperText={nameError}
          error={Boolean(nameError)}
        />
        <Button
          variant="outlined"
          disabled={isDisabled}
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
