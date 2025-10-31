import { Container, Typography } from "@mui/material";
import { ThemeContextProvider } from "./context/ThemeContext";
import Footer from "./shared/components/Footer";

function App() {
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
        >
          <Footer />
        </Container>
      </ThemeContextProvider>
    </>
  );
}

export default App;
