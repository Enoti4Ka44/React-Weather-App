import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import Footer from "../shared/components/Footer";
import Header from "../shared/components/Header";

function HomePage() {
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmitSearch = (e) => {
    e.preventDefault();

    try {
      setIsSearching(true);
      const promise = new Promise(() => {
        setTimeout(() => {
          console.log("submitted");
        }, 1000);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
