import { Typography } from "@mui/material";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Typography>Test</Typography>
      </ThemeContextProvider>
    </>
  );
}

export default App;
