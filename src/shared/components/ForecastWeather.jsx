import { Paper, Typography } from "@mui/material";
import React from "react";

function ForecastWeather({ hourForecastData }) {
  console.log(hourForecastData);
  return (
    <Paper sx={{ borderRadius: 3, p: 1.5 }}>
      <Typography
        variant="subtitle2"
        component="h6"
        fontWeight={700}
        sx={{ opacity: "0.7" }}
      >
        TODAY'S FORECAST
      </Typography>
    </Paper>
  );
}

export default ForecastWeather;
