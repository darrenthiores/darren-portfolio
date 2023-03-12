import {
  Box,
  Button,
  Center,
  Grid,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { motion } from "framer-motion";
import useObserver from "../../hooks/useObserver";
import BgImage from "../../assets/bgImage.svg";
import SectionTItle from "../../components/SectionTItle";
import breakPoints from "../../utils/interfaces/Breakpoints";
import container, { item } from "../../utils/motionVariants";

function Contact() {
  const { ref } = useObserver("Contact");
  return (
    <Box h="100vh" id="contact" ref={ref} w={breakPoints} margin="auto">
      <SectionTItle title="Contact Me" colored="Contact" />
      <Center
        as={motion.div}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        w="100%"
        flexDir="column"
        gap="1rem"
      >
        <VStack marginTop="6rem" w={{ base: "100%", xl: "60%" }}>
          <HStack w="100%" as={motion.div} variants={item}>
            <Input
              placeholder="First Name"
              p="1.5rem"
              fontFamily="inter"
              focusBorderColor="palette.accent"
              borderColor="rgba(255, 255, 255, .1)"
              bg="#271f50"
              _placeholder={{ color: "rgba(255, 255, 255, .5)" }}
            />
            <Input
              placeholder="Last Name"
              p="1.5rem"
              fontFamily="inter"
              focusBorderColor="palette.accent"
              borderColor="rgba(255, 255, 255, .1)"
              bg="#271f50"
              _placeholder={{ color: "rgba(255, 255, 255, .5)" }}
            />
          </HStack>
        </VStack>
        <Input
          w={{ base: "100%", xl: "60%" }}
          placeholder="Email"
          p="1.5rem"
          fontFamily="inter"
          focusBorderColor="palette.accent"
          borderColor="rgba(255, 255, 255, .1)"
          bg="#271f50"
          _placeholder={{ color: "rgba(255, 255, 255, .5)" }}
          as={motion.input}
          variants={item}
        />
        <Textarea
          w={{ base: "100%", xl: "60%" }}
          placeholder="Email"
          p="1.5rem"
          fontFamily="inter"
          maxH="25rem"
          h="20rem"
          minH="15rem"
          focusBorderColor="palette.accent"
          borderColor="rgba(255, 255, 255, .1)"
          bg="#271f50"
          _placeholder={{ color: "rgba(255, 255, 255, .5)" }}
          as={motion.textarea}
          variants={item}
        />
        <Button
          p="1.8rem"
          bg="palette.accent"
          fontSize="1.1rem"
          fontWeight="bold"
          fontFamily="inter"
          rightIcon={<BsFillSendFill />}
          _hover={{ bg: "palette.accent_hover" }}
          as={motion.button}
          variants={item}
        >
          Send Email
        </Button>
      </Center>
    </Box>
  );
}

export default Contact;
