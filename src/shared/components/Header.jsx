import { Box, Switch, IconButton, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import Search from "../ui/Search";

function Header({ query, onChange, visible, onSubmit }) {
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

      <Grid
        size={{ xs: 12, sm: 6 }}
        display="flex"
        justifyContent="center"
        sx={{
          transition: "0.5s all ease",
          transform: visible ? "translateY(0)" : "translateY(300px)",
        }}
      >
        <Box component="form" width="100%" onSubmit={onSubmit}>
          <Search onChange={onChange} query={query} />
        </Box>
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
