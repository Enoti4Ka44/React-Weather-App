import { Box, Switch, IconButton, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import Search from "../ui/Search";

function Header(props) {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      rowSpacing={1}
      columnSpacing={4}
      sx={{ py: 3, width: "100%" }}
    >
      <Grid size={{ xs: 0, sm: 3 }}></Grid>

      <Grid size={{ xs: 12, sm: 6 }} display="flex" justifyContent="center">
        <Search />
      </Grid>

      <Grid
        size={{ xs: 12, sm: 3 }}
        display="flex"
        justifyContent={{ xs: "center", sm: "flex-end" }}
        alignItems="center"
        gap={1}
      >
        <Switch />
        <IconButton
          LinkComponent="a"
          href="https://github.com/Enoti4Ka44/React-Weather-App"
          target="_blank"
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default Header;
