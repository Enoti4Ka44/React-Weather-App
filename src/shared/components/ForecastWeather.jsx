import { Paper, Typography } from "@mui/material";
import React from "react";
import Carousel from "../ui/Carousel";

function ForecastWeather({ hourForecastData }) {
  return (
    <Paper sx={{ borderRadius: 3, p: 2 }} elevation={4}>
      <Typography
        variant="subtitle1"
        component="h5"
        fontWeight={700}
        sx={{ opacity: "0.7" }}
      >
        TODAY'S FORECAST
      </Typography>
      <Carousel data={hourForecastData} />
    </Paper>
  );
}

export default ForecastWeather;
