import "./App.css";
import { Box } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store";
import LandingPage from "./components/landingPage/LandingPage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Box sx={{ width: "100vw", height: "100vh", bgcolor: "#222A43" }}>
          <LandingPage />
        </Box>
      </div>
    </Provider>
  );
}

export default App;
