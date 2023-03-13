import { Box } from "@chakra-ui/react";
import React from "react";

function BgElement3() {
  return (
    <Box
      w={{ base: "20rem", md: "30rem" }}
      h={{ base: "21rem", md: "31rem" }}
      bg="linear-gradient(to bottom, #301f53, #241e52)"
      //   bg="#301f53"
      pos="absolute"
      top="0"
      borderRadius="4rem"
      right="0"
      transform="rotate(80deg) translate(50%, 100%)"
    />
  );
}

export default BgElement3;
