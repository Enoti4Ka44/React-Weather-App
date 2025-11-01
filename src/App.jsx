import {
  Container,
  Input,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import { ThemeContextProvider } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <HomePage />
      </ThemeContextProvider>
    </>
  );
}

export default App;
