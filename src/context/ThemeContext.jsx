import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7779b5",
    },
    secondary: {
      main: "#8975b7",
    },
    backgroundColor: "#000324",
    background: {
      default: "#00053bff",
      paper: "#3f4471c7",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#A6E1FF",
    },
    secondary: {
      main: "#57dacdff",
    },
    background: {
      default: "#149ab8ff",
      paper: "#a6e1ffc7",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const memoTheme = useMemo(
    () => (theme === "dark" ? darkTheme : lightTheme),
    [theme]
  );

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <ThemeProvider theme={memoTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
