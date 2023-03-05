import { Box } from "@chakra-ui/react";
import React from "react";

function BgElement() {
  return (
    <Box
      w="20rem"
      h="18rem"
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
