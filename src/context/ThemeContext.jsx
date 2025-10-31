import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { createContext, useContext, useMemo, useState } from "react";

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
      default: "#000324",
      paper: "#3F4471",
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
      main: "#3cbdd4",
    },
    secondary: {
      main: "#58c3b8",
    },
    background: {
      default: "#0B849F",
      paper: "#A6E1FF",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const memoTheme = useMemo(
    () => (theme === "dark" ? darkTheme : lightTheme),
    [theme]
  );

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    console.log("click");
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
