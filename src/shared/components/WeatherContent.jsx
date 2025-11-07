import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";

function WeatherContent({ data }) {
  return (
    <Grid container sx={{ width: "100%" }}>
      <Grid size={8}>
        <CurrentWeather city={data.location.name} weather={data.current} />
        <ForecastWeather hourForecastData={data.forecast.forecastday[0].hour} />
      </Grid>

      <Grid size={4}></Grid>
    </Grid>
  );
}

export default WeatherContent;
