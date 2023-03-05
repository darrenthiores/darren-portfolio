import { Box, Center, Grid, Text } from "@chakra-ui/react";
import React from "react";
import useObserver from "../../hooks/useObserver";
import BgImage from "../../assets/bgImage.svg";

function Portfolio() {
  const { ref } = useObserver("Portfolio");

  return (
    <Box h="100vh" id="portfolio" ref={ref}>
      <Center>Portfolio</Center>
    </Box>
  );
}

export default Portfolio;
