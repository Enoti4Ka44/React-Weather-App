import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function WeatherDayCard({ weatherData }) {
  const { date } = weatherData;
  const { maxtemp_c, mintemp_c } = weatherData.day;
  const { text, icon } = weatherData.day.condition;

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sut"];

  const getWeekday = (stringDate) => {
    const date = new Date(stringDate);
    const today = new Date();

    const isToday = date.getDate() === today.getDate();
    if (isToday) {
      return "Today";
    }

    return weekdays[date.getDay()];
  };

  return (
    <Grid
      container
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        mb: 1,
      }}
      spacing={2}
    >
      <Grid size={3}>
        <Typography variant="h6" component="p" fontWeight={400}>
          {getWeekday(date)}
        </Typography>
      </Grid>

      <Grid
        size={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img src={icon} alt="weather icon" width="50px" height="50px" />
        <Typography variant="subtitle1" component="p">
          {text}
        </Typography>
      </Grid>
      <Grid
        size={3}
        sx={{
          display: "flex",
          alignItems: { xs: "end", lg: "center" },
          justifyContent: { xs: "center", lg: "end" },
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: 0, lg: 1 },
        }}
      >
        <Typography variant="h6" component="p">
          {maxtemp_c}°
        </Typography>
        <Typography variant="h6" component="p" sx={{ opacity: "0.6" }}>
          {mintemp_c}°
        </Typography>
      </Grid>
    </Grid>
  );
}

export default WeatherDayCard;
