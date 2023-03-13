import { Box } from "@chakra-ui/react";
import React from "react";

function BgElement2() {
  return (
    <Box
      w={{ base: "10rem", md: "20rem" }}
      h={{ base: "11rem", md: "21rem" }}
      transform="rotate(50deg)"
      bg="linear-gradient(to bottom, #2c1e51, #241e52)"
      //   bg="#241e52"
      pos="absolute"
      top="0"
      borderRadius="4rem"
      right="2rem"
    />
  );
}

export default BgElement2;
