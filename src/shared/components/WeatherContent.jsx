import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function WeatherContent({ data }) {
  return (
    <Grid container>
      <Grid size={8}>
        <Typography variant="h5" component="h1" fontWeight={600}>
          {data.name}
        </Typography>
      </Grid>
      <Grid size={4}></Grid>
    </Grid>
  );
}

export default WeatherContent;
