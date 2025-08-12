import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Register from "./components/Register";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Box sx={{ width: "100vw", height: "100vh", bgcolor: "#222A43" }}>
        <Register />
      </Box>
    </div>
  );
}

export default App;
