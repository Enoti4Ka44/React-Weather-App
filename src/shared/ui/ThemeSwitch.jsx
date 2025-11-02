import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import { FormControlLabel, Switch } from "@mui/material";
import { ThemeContext } from "../../context/ThemeContext";

const StyledThemeSwitch = styled(Switch)(({ theme }) => ({
  width: 64,
  height: 40,
  padding: 6,
  "& .MuiSwitch-switchBase": {
    margin: 8,
    padding: 0,
    transform: "translateX(1px)",
    "&.Mui-checked": {
      color: "#ffffffff",
      transform: "translateX(24px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#0b3b6bff",
        ...theme.applyStyles("dark", {
          backgroundColor: "#07213bff",
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#44a5ddff",
    width: 24,
    height: 24,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#ffffffff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "#464b7aff",
    }),
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#7fc6e9ff",
    borderRadius: 20,
    ...theme.applyStyles("dark", {
      backgroundColor: "#679bcfff",
    }),
  },
}));

function ThemeSwitch() {
  const { changeTheme, theme } = useContext(ThemeContext);

  return (
    <FormControlLabel
      control={
        <StyledThemeSwitch
          onChange={changeTheme}
          checked={theme === "dark" ? true : false}
        />
      }
    />
  );
}

export default ThemeSwitch;
