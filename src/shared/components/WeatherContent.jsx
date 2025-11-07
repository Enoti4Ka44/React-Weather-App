import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CurrentWeather from "./CurrentWeather";

function WeatherContent({ data }) {
  return (
    <Grid container sx={{ width: "100%" }}>
      <Grid size={8}>
        <CurrentWeather data={data} />
      </Grid>

      <Grid size={4}></Grid>
    </Grid>
  );
}

export default WeatherContent;
