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
  Image,
  Text,
  Wrap,
  WrapItem,
  Link
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import useObserver from "../../hooks/useObserver";
import BgImage from "../../assets/bgImage.svg";
import SectionTItle from "../../components/SectionTItle";
import breakPoints from "../../utils/interfaces/Breakpoints";
import container, { item } from "../../utils/motionVariants";
import Image1 from "../../assets/portfolio_images/detaq_ss.png";
import Image2 from "../../assets/portfolio_images/translator_kmm_ss.png";
import Image3 from "../../assets/portfolio_images/calorie_tracker_ss.png";
import Image4 from "../../assets/portfolio_images/efifalite_ss.png";
import Image5 from "../../assets/portfolio_images/ajarin_ss.png";
import Image6 from "../../assets/portfolio_images/note_kmm_ss.png";

function Portfolio() {
  const { ref } = useObserver("Portfolio");

  const sample_images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
  ];

  const titles = [
    "DetaQ",
    "TranslatorKMM",
    "CalorieTracker",
    "EFifa-Lite",
    "Ajarin",
    "NoteKMM"
  ];

  const descriptions = [
    "DetaQ is an app to help people prevent, treat, and follow up on heart attacks. This app designed for two users which are the patient and the families member. This app also connected to a smart wristband through IOT, where the wristband will used to detect patient's heart rate and send sos to families member.",
    "This app is a translator app, works just like any translation app, user can choose which language to which language and just type the word or sentence they want to translate. Any translated words will be inserted to local database as a history which user can easily use at any time. Not just by text, user can use voice to text translation. This app use KMM (Kotlin Multiplatform Mobile) for the data layer to view model and supports Android and IOS.",
    "This is a Calorie Tracker application, which can track user daily calories consumption based on what user consumed in a day, then based on user goals preference and current information, the app will tell user about the ideal calories consumption and will warn user when the total consumption is exceeds the ideal calories in a day.",
    "eFifa Lite -- A football manager app, you can play as a manager and build your own team with players which you can aquire by draw. This is not a real football game app thought, it is only a for fun app where you can choose players by position and team's formation. You can aquire player by draw, you can choose which league to draw and it cost 100 in game coin. You will get 1100 coin in the first login and 100 coin every 7am WIB from claiming login gift.",
    "Ajarin has the main goal, which is to connect students who want to be taught by other people with students who want to make extra money by teaching other people. Through Ajarin students can take private courses taught directly by mentors of the same age at affordable costs, without any boundaries between students and teachers so that students can interact more freely, such as between friends and friends.\n This app have a lot of features, like messaging (still saved in local database), Nested Scroll (Mentor Profile), Picking Image (Review Mentor), etc.",
    "This app is a note app, a CRUD app, where user can create note, read note, update note, and delete note, also search a note. This app use KMM (Kotlin Multiplatform Mobile) for the data layer and supports Android and IOS."
  ];

  const links = [
    "https://github.com/darrenthiores/detaQ",
    "https://github.com/darrenthiores/TranslatorKMM",
    "https://github.com/darrenthiores/CalorieTracker",
    "https://github.com/darrenthiores/eFifa-Lite",
    "https://github.com/darrenthiores/Ajarin",
    "https://github.com/darrenthiores/NoteAppKMM"
  ]

  return (
    <Box
      id="portfolio"
      paddingBlock="8rem"
      ref={ref}
      w={breakPoints}
      margin="auto"
    >
      <SectionTItle title="My Portfolio." colored="Portfolio" />
      <Wrap
        marginTop="6rem"
        justify="center"
        spacing="1.2rem"
        as={motion.div}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {sample_images.map((image, index) => {
          return (
            <WrapItem key={index}>
              <Card w="25rem" as={motion.div} variants={item}>
                <CardHeader
                  fontSize="1.3rem"
                  bg="linear-gradient(to top right, #d450d9, #271f73)"
                  borderTopRadius=".3rem"
                >
                  <Center flexDir="column" gap="1.5rem">
                    <Center h="15rem" w="100%" borderRadius=".3rem" bg="white">
                      {/* <Text fontFamily="inter" fontSize=".9rem">
                        Some Image Here of the Work
                      </Text> */}
                      <Image
                        borderRadius=".3rem"
                        src={image}
                        alt="Sample Image"
                        w="100%"
                        h="100%"
                        objectFit="scale-down"
                      />
                    </Center>
                    <Text color="white">{titles[index]}</Text>
                  </Center>
                </CardHeader>
                <CardBody>
                  <Text fontFamily="inter" fontWeight="light">
                  {descriptions[index]}
                  </Text>
                </CardBody>
                <CardFooter fontSize="1.2rem">
                  <Link
                    fontFamily="inter"
                    href={links[index]}
                    isExternal
                  >
                    <Button
                      bg="linear-gradient(to top right, #d450d9, #271f53)"
                      color="white"
                      _hover={{}}
                    >
                      View
                    </Button>
                  </Link>
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
