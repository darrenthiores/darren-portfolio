import { Box, Center, Grid, Text } from "@chakra-ui/react";
import React from "react";
import useObserver from "../../hooks/useObserver";
import BgImage from "../../assets/bgImage.svg";

function About() {
  const { ref } = useObserver("About");
  return (
    <Box h="100vh" id="about" ref={ref}>
      <Center>About</Center>
    </Box>
  );
}

export default About;
