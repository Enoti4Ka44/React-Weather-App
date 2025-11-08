import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";
import WeatherConditions from "./WeatherConditions";

function WeatherContent({ data }) {
  return (
    <Grid container sx={{ width: "100%" }}>
      <Grid
        size={8}
        sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, md: 5 } }}
      >
        <CurrentWeather
          city={data.location.name}
          currentWeather={data.current}
        />
        <ForecastWeather hourForecastData={data.forecast.forecastday[0].hour} />
        <WeatherConditions conditions={data.current} />
      </Grid>

      <Grid size={4}></Grid>
    </Grid>
  );
}

export default WeatherContent;
