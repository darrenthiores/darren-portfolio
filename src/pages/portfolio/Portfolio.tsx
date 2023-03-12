/* eslint-disable react/no-array-index-key */
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Grid,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import useObserver from "../../hooks/useObserver";
import BgImage from "../../assets/bgImage.svg";
import SectionTItle from "../../components/SectionTItle";
import breakPoints from "../../utils/interfaces/Breakpoints";

function Portfolio() {
  const { ref } = useObserver("Portfolio");

  return (
    <Box
      id="portfolio"
      paddingBlock="8rem"
      ref={ref}
      w={breakPoints}
      margin="auto"
    >
      <SectionTItle title="My Portfolio." colored="Portfolio" />
      <Wrap marginTop="6rem" justify="center" spacing="1.2rem">
        {[...Array(5)].map((_, index) => {
          return (
            <WrapItem key={index}>
              <Card w="25rem">
                <CardHeader
                  fontSize="1.3rem"
                  bg="linear-gradient(to top right, #d450d9, #271f73)"
                  borderTopRadius=".3rem"
                >
                  <Center flexDir="column" gap="1.5rem">
                    <Center h="10rem" w="100%" borderRadius=".3rem" bg="white">
                      <Text fontFamily="inter" fontSize=".9rem">
                        Some Image Here of the Work
                      </Text>
                    </Center>
                    <Text color="white">Title of the Work</Text>
                  </Center>
                </CardHeader>
                <CardBody>
                  <Text fontFamily="inter" fontWeight="light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </Text>
                </CardBody>
                <CardFooter fontSize="1.2rem">
                  <Button
                    fontFamily="inter"
                    bg="linear-gradient(to top right, #d450d9, #271f53)"
                    color="white"
                    _hover={{}}
                  >
                    View Live
                  </Button>
                </CardFooter>
              </Card>
            </WrapItem>
          );
        })}
      </Wrap>
    </Box>
  );
}

export default Portfolio;
