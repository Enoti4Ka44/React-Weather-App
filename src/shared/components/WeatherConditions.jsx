import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

function WeatherConditions({ conditions }) {
  const { wind_kph, pressure_mb, humidity, vis_km, uv, precip_mm } = conditions;
  return (
    <Paper sx={{ borderRadius: 3, p: 3 }} elevation={4}>
      <Typography
        variant="subtitle1"
        component="h5"
        fontWeight={700}
        sx={{ opacity: "0.7" }}
      >
        AIR CONDITIONS
      </Typography>
      <Grid container mt={2} px={1} rowSpacing={4} columnSpacing={2}>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <Typography variant="subtitle1" component="p">
            Wind
          </Typography>
          <Typography variant="h5" component="p" fontWeight={600}>
            {wind_kph} km/h
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <Typography variant="subtitle1" component="p">
            Precipitation
          </Typography>
          <Typography variant="h5" component="p" fontWeight={600}>
            {precip_mm} mm
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <Typography variant="subtitle1" component="p">
            Pressure
          </Typography>
          <Typography variant="h5" component="p" fontWeight={600}>
            {pressure_mb} mbar
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <Typography variant="subtitle1" component="p">
            Humidity
          </Typography>
          <Typography variant="h5" component="p" fontWeight={600}>
            {humidity} %
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <Typography variant="subtitle1" component="p">
            UV Index
          </Typography>
          <Typography variant="h5" component="p" fontWeight={600}>
            {uv}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <Typography variant="subtitle1" component="p">
            Visibility
          </Typography>
          <Typography variant="h5" component="p" fontWeight={600}>
            {vis_km} km
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default WeatherConditions;
