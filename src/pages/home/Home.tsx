import {
  Box,
  Button,
  Flex,
  Grid,
  Highlight,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import useObserver from "../../hooks/useObserver";
import BgElement from "./components/BgElement";
import BgElement2 from "./components/BgElement2";
import BgElement3 from "./components/BgElement3";
import Hero from "./sections/Hero";

function Home(): ReactElement {
  const { ref } = useObserver("Home");

  return (
    <Box ref={ref} pos="relative">
      <Hero />
      <BgElement />
      <BgElement2 />
      <BgElement3 />
    </Box>
  );
}

export default Home;
