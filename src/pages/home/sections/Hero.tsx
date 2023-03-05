import {
  Button,
  Flex,
  Highlight,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import useObserver from "../../../hooks/useObserver";
import breakPoints from "../../../utils/interfaces/Breakpoints";

function Hero() {
  const { ref } = useObserver("Hero");
  return (
    <Flex
      h="100vh"
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      justifyContent="center"
      alignItems="center"
      id="hero"
      ref={ref}
    >
      <Flex
        w={breakPoints}
        justifyContent="center"
        alignItems="center"
        margin="auto"
      >
        <VStack align="center" zIndex={5} justify="center" w="100%">
          <Text fontSize="5.5rem" fontWeight="bold" textAlign="center">
            <Highlight
              query="Profession"
              styles={{
                color: "palette.accent",
                fontWeight: "black",
              }}
            >
              Your Profession Here.
            </Highlight>
          </Text>
          <Text
            w="60%"
            fontSize="1.2rem"
            fontWeight="normal"
            fontFamily="inter"
            textAlign="center"
          >
            Bringing ideas to life through design and creativity.
          </Text>
          <HStack spacing="1rem" paddingTop="2.5rem">
            <Button
              p="1.8rem 2.5rem"
              bg="palette.accent"
              fontSize="1.1rem"
              fontWeight="bold"
              fontFamily="inter"
              borderBottomRightRadius="5rem"
              _hover={{ bg: "palette.accent_hover" }}
            >
              My Portfolio
            </Button>
            <Button
              p="1.8rem 2.5rem"
              color="palette.accent"
              bg="transparent"
              border="1px solid"
              borderColor="palette.accent"
              fontSize="1.1rem"
              fontWeight="bold"
              fontFamily="inter"
              borderTopLeftRadius="5rem"
              _hover={{}}
            >
              Contact Me
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </Flex>
  );
}

export default Hero;
