import { Box, Paper, Tooltip, Typography } from "@mui/material";

function CurrentWeather({ city, currentWeather }) {
  const { temp_c, condition, feelslike_c } = currentWeather;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 2,
      }}
    >
      <Box>
        <Typography variant="h4" component="h2" fontWeight={700}>
          {city}
        </Typography>

        <Typography sx={{ mt: 4 }} variant="h4" component="h2" fontWeight={700}>
          {Math.floor(temp_c)}°
          <Typography
            sx={{ ml: 2, opacity: "0.4" }}
            variant="h4"
            component="span"
            fontWeight={700}
          >
            {Math.floor(feelslike_c)}°
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            fontWeight={500}
            sx={{ opacity: "0.7" }}
          >
            Celsius {"(°C)"}
          </Typography>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" component="h6">
          {condition.text}
        </Typography>

        <img src={condition.icon} alt="condition icon" />
      </Box>
    </Box>
  );
}

export default CurrentWeather;
