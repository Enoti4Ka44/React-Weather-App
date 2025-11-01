import {
  Container,
  Input,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import { ThemeContextProvider } from "./context/ThemeContext";
import Footer from "./shared/components/Footer";
import Search from "./shared/ui/Search";
import { useState } from "react";
import { set } from "react-hook-form";
import Header from "./shared/components/Header";

function App() {
  const [s, setS] = useState("");
  return (
    <>
      <ThemeContextProvider>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
          component="main"
          maxWidth="false"
        >
          <Header />
          <Footer />
        </Container>
      </ThemeContextProvider>
    </>
  );
}

export default App;
