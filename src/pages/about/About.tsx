import {
  Box,
  Button,
  Center,
  Grid,
  HStack,
  Stack,
  Text,
  Image,
  Link
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { motion } from "framer-motion";
import useObserver from "../../hooks/useObserver";
import SectionTItle from "../../components/SectionTItle";
import breakPoints from "../../utils/interfaces/Breakpoints";
import container, { item } from "../../utils/motionVariants";
import SampleImage from "../../assets/portfolio_images/me_photo.jpeg";

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
        as={motion.div}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Center
          flex={1}
          bg="white"
          w="20rem"
          h="30rem"
          borderRadius=".5rem"
          as={motion.div}
          variants={item}
        >
          <Image
            borderRadius=".3rem"
            src={SampleImage}
            alt="Sample Image"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Center>
        <Center
          flexDir="column"
          alignItems="start"
          gap="1.5rem"
          flex={1}
          as={motion.div}
          variants={item}
        >
          <Text fontFamily="inter" fontWeight="light" fontSize="1.1rem">
          I am student of Binus University majoring in Computer Science and a Certified Associate Android Developer by Google. Love Android Development since the first time and keep building until now. 
          I have published one app to google play store and built some projects. I also love to learn and shares about the newest technology on android.
          </Text>
          <Link
            fontFamily="inter"
            href="https://drive.google.com/file/d/1u49HzwESGo3Fi4oJCZoBA2XRIcXo7Ydg/view?usp=sharing"
            isExternal
          >
            <Button
            p="1.8rem 2.8rem 1.8rem 2rem"
            color="palette.accent"
            bg="transparent"
            border="1px solid"
            borderColor="palette.accent"
            fontSize="1.1rem"
            fontWeight="bold"
            leftIcon={<AiOutlineDownload />}
            borderTopRightRadius="5rem"
            >
              My Resume
            </Button>
          </Link>
        </Center>
      </Stack>
    </Box>
  );
}

export default About;
