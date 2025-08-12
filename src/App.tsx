import "./App.css";
import Register from "./components/Register";
import { Box } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Box sx={{ width: "100vw", height: "100vh", bgcolor: "#222A43" }}>
          <Register />
        </Box>
      </div>
    </Provider>
  );
}

export default App;
