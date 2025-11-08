import { Box, Icon, IconButton, Typography } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import React, { useState, useRef, useEffect } from "react";
import WeatherCarouselCard from "./WeatherCarouselCard";

function Carousel({ data }) {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        width: "100%",
        mt: 2,
      }}
    >
      <IconButton
        sx={{ "&:hover": { backgroundColor: "transparent" } }}
        onClick={handlePrev}
        disabled={isDisabled("prev")}
      >
        <ArrowBackIosRoundedIcon />
      </IconButton>

      <Box
        ref={carousel}
        sx={{
          display: "flex",
          gap: 3,
          transition: "all .5s ease-out",
          overflow: "hidden",
          scrollBehavior: "smooth",
        }}
      >
        {data.map((card, index) => (
          <WeatherCarouselCard
            key={index}
            time={card.time}
            temp={card.temp_c}
            icon={card.condition.icon}
          />
        ))}
      </Box>

      <IconButton
        sx={{ "&:hover": { backgroundColor: "transparent" } }}
        onClick={handleNext}
        disabled={isDisabled("next")}
      >
        <ArrowForwardIosRoundedIcon />
      </IconButton>
    </Box>
  );
}

export default Carousel;
