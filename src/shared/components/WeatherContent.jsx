import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CurrentWeather from "./CurrentWeather";
import HourWeatherForecast from "./HourWeatherForecast";
import WeatherConditions from "./WeatherConditions";
import WeekWeatherForecast from "./WeekWeatherForecast";

function WeatherContent({ data }) {
  return (
    <Grid container sx={{ width: "100%" }} spacing={{ xs: 2, md: 4 }}>
      <Grid
        size={{ xs: 12, md: 7 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: { xs: 2, md: 4 },
          m: "0 auto",
        }}
      >
        <CurrentWeather
          city={data.location.name}
          currentWeather={data.current}
        />
        <HourWeatherForecast
          hourForecastData={data.forecast.forecastday[0].hour}
        />
        <WeatherConditions conditions={data.current} />
      </Grid>

      <Grid size={{ xs: 12, md: 5 }} m="0 auto">
        <WeekWeatherForecast weekForecastData={data.forecast.forecastday} />
      </Grid>
    </Grid>
  );
}

export default WeatherContent;
