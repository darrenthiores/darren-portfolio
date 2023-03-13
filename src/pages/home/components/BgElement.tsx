import { Box } from "@chakra-ui/react";
import React from "react";

function BgElement() {
  return (
    <Box
      w={{ base: "8rem", md: "18rem" }}
      h={{ base: "9rem", md: "19rem" }}
      transform="rotate(20deg)"
      bg="linear-gradient(to bottom, #2c1e51, #603084)"
      pos="absolute"
      top="0"
      borderRadius="4rem"
      left="2rem"
    />
  );
}

export default BgElement;
