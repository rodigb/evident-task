import { Box, Button, Container, styled, TextField } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../hooks";
import { incrementCount } from "./asyncActions";

function Register() {
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

  const count = useAppSelector(
    (state: { registerReducer: { value: number } }) =>
      state.registerReducer.value
  );
  const dispatch = useAppDispatch();

  function Counter() {
    console.log("clicked");

    dispatch(incrementCount());

    console.log(count);
  }
  return (
    <Container
      sx={{
        bgcolor: "#222A43",
        p: 8,
        width: "30vw",
        height: "30vh",
        border: "2px solid #FFFFFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: 11,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <CustomTextField label="Email" sx={{ width: "70%" }} />
        <CustomTextField label="Name" sx={{ width: "70%" }} />
        <Button
          variant="outlined"
          sx={{
            borderColor: "#FF7129",
            color: "#FF7129",
            borderRadius: 4,
            borderWidth: 2,
          }}
          onClick={() => {
            Counter();
          }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default Register;
