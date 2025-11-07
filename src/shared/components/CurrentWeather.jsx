import { Box, Paper, Typography } from "@mui/material";

function CurrentWeather({ data }) {
  const { name } = data.location;
  const { temp_c, condition, feelslike_c } = data.current;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h5" component="h2" fontWeight={700}>
          {name}
        </Typography>

        <Typography sx={{ mt: 4 }} variant="h4" component="h2" fontWeight={700}>
          {temp_c}°
          <Typography
            sx={{ ml: 2, opacity: "0.4" }}
            variant="h4"
            component="span"
            fontWeight={700}
          >
            {feelslike_c}°
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
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="subtitle1" component="h6">
          {condition.text}
        </Typography>
        <img src={condition.icon} alt="condition icon" />
      </Box>
    </Box>
  );
}

export default CurrentWeather;
