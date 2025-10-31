import { Box, Link, Typography } from "@mui/material";
import React from "react";

function Footer(props) {
  return (
    <Box sx={{ marginTop: "auto", px: 2, py: 3 }}>
      <Typography>
        Developed by{" "}
        <Link color="secondary" href="https://github.com/Enoti4Ka44">
          Enoti4ka
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
