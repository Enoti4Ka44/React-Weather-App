import { InputBase, Paper, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

const SearchBar = styled(Paper)(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: theme.palette.primary.main,
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: "0.5",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",

  padding: theme.spacing(0.5, 4, 0.5, 6),
}));

function Search({ onChange, query }) {
  return (
    <SearchBar elevation={6}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        name="queryLocation"
        type="text"
        placeholder="Search for location"
        onChange={onChange}
        value={query}
      />
    </SearchBar>
  );
}

export default Search;
