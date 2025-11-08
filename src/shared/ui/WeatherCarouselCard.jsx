import { Box, Typography } from "@mui/material";
import React from "react";

function WeatherCarouselCard({ time, icon, temp }) {
  let hour = new Date(time).getHours();
  let flooredTemp = Math.floor(temp);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 1,
      }}
    >
      <Typography component="p" variant="h6" fontWeight={400}>
        {hour}
      </Typography>
      <img src={icon} width="50px" height="50px" />
      <Typography component="p" variant="h6" fontWeight={400}>
        {flooredTemp}°
      </Typography>
    </Box>
  );
}

export default WeatherCarouselCard;
