import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import Footer from "../shared/components/Footer";
import Header from "../shared/components/Header";
import { getCurrentWeather } from "../services/weatherAPI";
import WeatherContent from "../shared/components/WeatherContent";

function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [queryCity, setQueryCity] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmitSearch = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(fetchWeather, 1000);
  };

  const fetchWeather = async () => {
    try {
      setIsLoading(true);
      const response = await getCurrentWeather(queryCity);
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
          query={queryCity}
          onSubmit={handleSubmitSearch}
          onChange={(e) => setQueryCity(e.target.value)}
        />
      </Box>

      {isSearching && weatherData && (
        <WeatherContent data={weatherData?.location} />
      )}
      <Footer />
    </Container>
  );
}

export default HomePage;
