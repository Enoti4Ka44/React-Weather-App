import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import Footer from "../shared/components/Footer";
import Header from "../shared/components/Header";

function HomePage() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmitSearch = (e) => {
    setIsSearching(true);
    e.preventDefault();
  };

  return (
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
      <Box
        width="100%"
        sx={{
          transition: "0.5s all ease",
          transform: isSearching ? "translateY(0)" : "translateY(40vh)",
        }}
      >
        <Header
          query={query}
          onSubmit={handleSubmitSearch}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Box>
      <Footer />
    </Container>
  );
}

export default HomePage;
