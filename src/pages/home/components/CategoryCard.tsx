import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  VStack,
  WrapItem,
} from "@chakra-ui/react";

interface CategoryProps {
  name: string;
  description: string;
  image: string;
}

function CategoryCard(props: CategoryProps) {
  const { name, description, image } = props;
  return (
    <WrapItem>
      <Flex
        w="22rem"
        h="30rem"
        p="2rem"
        bg="linear-gradient(to top, #FF7C14, white)"
        borderRadius=".3rem"
        justifyContent="end"
        alignItems="center"
        flexDir="column"
        gap="5.5rem"
      >
        <Box w={name === "K - NAM" ? "15rem" : "10rem"}>
          <Image
            w="100%"
            src={image}
            filter="drop-shadow(0px 15px 10px rgba(0, 0, 0, .3))"
          />
        </Box>
        <VStack alignSelf="center">
          <Text
            color="palette.secondary"
            fontWeight="black"
            fontSize="2rem"
            textAlign="center"
          >
            {name}
          </Text>
          <Text
            color="palette.secondary"
            fontWeight="semibold"
            fontSize="1.2rem"
            textAlign="center"
            opacity=".8"
          >
            {description}
          </Text>
        </VStack>
        <Box>
          <Button
            border="1px solid"
            borderColor="white"
            color="white"
            p="1.5rem"
            fontWeight="bold"
            borderRadius="20rem"
            transition="all .3s ease"
            bg="rgba(255, 255, 255, .1)"
            _hover={{ bg: "rgba(255, 255, 255, .2)" }}
          >
            See Category
          </Button>
        </Box>
      </Flex>
    </WrapItem>
  );
}

export default CategoryCard;
