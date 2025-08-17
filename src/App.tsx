import "./App.css";
import { Box, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store";
import LandingPage from "./components/landingPage/LandingPage";
import theme from "./theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Box sx={{ width: "100vw", height: "100vh", bgcolor: "#222A43" }}>
            <LandingPage />
          </Box>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
