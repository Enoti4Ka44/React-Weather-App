import { Box, Link, Typography } from "@mui/material";
import React from "react";

function Footer(props) {
  return (
    <Box sx={{ marginTop: "auto", py: 3, textAlign: "center" }}>
      <Typography>
        Developed by{" "}
        <Link
          color="secondary"
          underline="always"
          href="https://github.com/Enoti4Ka44"
        >
          Enoti4ka
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
