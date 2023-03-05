import { Box, Center, Grid, Text } from "@chakra-ui/react";
import React from "react";
import useObserver from "../../hooks/useObserver";
import BgImage from "../../assets/bgImage.svg";

function Contact() {
  const { ref } = useObserver("Contact");
  return (
    <Box h="100vh" id="contact" ref={ref}>
      <Center>Contact</Center>
    </Box>
  );
}

export default Contact;
