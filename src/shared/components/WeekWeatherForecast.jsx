import { Paper, Typography } from "@mui/material";
import React from "react";
import WeatherDayCard from "../ui/WeatherDayCard";

function WeekWeatherForecast({ weekForecastData }) {
  return (
    <Paper sx={{ borderRadius: 3, p: 2, height: "100%" }} elevation={4}>
      <Typography
        variant="subtitle1"
        component="h5"
        fontWeight={700}
        sx={{ opacity: "0.7" }}
      >
        7-DAY FORECAST
      </Typography>
      {weekForecastData.map((card) => (
        <WeatherDayCard weatherData={card} key={card.date} />
      ))}
    </Paper>
  );
}

export default WeekWeatherForecast;
