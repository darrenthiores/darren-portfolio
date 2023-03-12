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
            fontSize="5.5rem"
            fontWeight="bold"
            textAlign="center"
            as={motion.p}
            variants={item}
          >
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
            as={motion.p}
            variants={item}
          >
            Bringing ideas to life through design and creativity.
          </Text>
          <HStack
            spacing="1rem"
            paddingTop="2.5rem"
            as={motion.button}
            variants={item}
          >
            <Button
              p="1.8rem 2.8rem 1.8rem 2rem"
              bg="palette.accent"
              fontSize="1.1rem"
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
              p="1.8rem 2rem 1.8rem 2.8rem"
              color="palette.accent"
              bg="transparent"
              border="1px solid"
              borderColor="palette.accent"
              fontSize="1.1rem"
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
