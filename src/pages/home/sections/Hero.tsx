import {
  Button,
  Flex,
  Highlight,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaProjectDiagram } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { motion } from "framer-motion";
import useObserver from "../../../hooks/useObserver";
import breakPoints from "../../../utils/interfaces/Breakpoints";
import container, { item } from "../../../utils/motionVariants";

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
        as={motion.div}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        zIndex={99}
      >
        <VStack align="center" justify="center" w="100%">
          <Text
            fontSize={{ base: "4rem", md: "5.5rem" }}
            fontWeight="bold"
            textAlign="center"
            as={motion.p}
            variants={item}
          >
            <Highlight
              query="Developer"
              styles={{
                color: "palette.accent",
                fontWeight: "black",
              }}
            >
              Mobile Developer.
            </Highlight>
          </Text>
          <Text
            w={{ base: "100%", md: "60%" }}
            fontSize={{ base: "1rem", md: "1.2rem" }}
            fontWeight="normal"
            fontFamily="inter"
            textAlign="center"
            as={motion.p}
            variants={item}
          >
            Native Android and IOS.
          </Text>
          <HStack
            spacing="1rem"
            paddingTop="2.5rem"
            as={motion.button}
            variants={item}
          >
            <Button
              p="1.8em 2.8em 1.8em 2em"
              bg="palette.accent"
              fontSize={{ base: ".8rem", md: "1.1rem" }}
              fontWeight="bold"
              fontFamily="inter"
              leftIcon={<FaProjectDiagram />}
              borderBottomRightRadius="5rem"
              _hover={{ bg: "palette.accent_hover" }}
              as="a"
              href="#portfolio"
            >
              My Portfolio
            </Button>
            <Button
              p="1.8em 2em 1.8em 2.8em"
              color="palette.accent"
              bg="transparent"
              border="1px solid"
              borderColor="palette.accent"
              fontSize={{ base: ".8rem", md: "1.1rem" }}
              fontWeight="bold"
              fontFamily="inter"
              rightIcon={<AiFillPhone />}
              borderTopLeftRadius="5rem"
              _hover={{}}
              as="a"
              href="#contact"
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
