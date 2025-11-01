import React, { useState } from "react";
import { Container } from "@mui/material";
import Footer from "../shared/components/Footer";
import Header from "../shared/components/Header";

function HomePage() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
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
      <Header
        query={query}
        visible={isSearching}
        onChange={handleSubmitSearch}
      />
      <Footer />
    </Container>
  );
}

export default HomePage;
