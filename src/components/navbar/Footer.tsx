import { Center, Text } from "@chakra-ui/react";
import BgImage from "../../assets/bgImage.svg";

function Footer() {
  return (
    <Center
      h="5rem"
      w="100%"
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      <Text fontSize="1rem" color="palette.secondary">
        Copyright 202
      </Text>
    </Center>
  );
}

export default Footer;
