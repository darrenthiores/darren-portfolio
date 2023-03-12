import {
  Box,
  Button,
  Center,
  Grid,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import useObserver from "../../hooks/useObserver";
import SectionTItle from "../../components/SectionTItle";
import breakPoints from "../../utils/interfaces/Breakpoints";

function About() {
  const { ref } = useObserver("About");
  return (
    <Box
      paddingBlock="10rem"
      w={breakPoints}
      margin="auto"
      id="about"
      ref={ref}
    >
      <SectionTItle title="About Me." colored="About" />
      <Stack
        direction={{ base: "column", md: "row" }}
        marginTop="6rem"
        spacing="2.5rem"
      >
        <Center flex={1} bg="white" w="20rem" h="20rem" borderRadius=".5rem">
          <Text color="palette.primary" fontFamily="inter">
            You Image Here Maybe
          </Text>
        </Center>
        <Center flexDir="column" alignItems="start" gap="1.5rem" flex={1}>
          <Text fontFamily="inter" fontWeight="light" fontSize="1.1rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
          <Button
            p="1.8rem 2.8rem 1.8rem 2rem"
            color="palette.accent"
            bg="transparent"
            border="1px solid"
            borderColor="palette.accent"
            fontSize="1.1rem"
            fontWeight="bold"
            fontFamily="inter"
            leftIcon={<AiOutlineDownload />}
            borderTopRightRadius="5rem"
            _hover={{}}
          >
            My Resume
          </Button>
        </Center>
      </Stack>
    </Box>
  );
}

export default About;
