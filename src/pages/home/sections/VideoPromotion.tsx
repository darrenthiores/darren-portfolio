import { AspectRatio, Center, Grid, Text } from "@chakra-ui/react";
import breakPoints from "../../../utils/interfaces/Breakpoints";

function VideoPromotion() {
  return (
    <Center
      w={breakPoints}
      margin="auto"
      paddingBlock="5rem"
      placeContent="center"
      flexDir="column"
    >
      <Text color="palette.secondary" paddingBlock="2rem">
        Basta text dito
      </Text>
      <AspectRatio
        ratio={3 / 2}
        h={{ base: "100%", xl: "60%" }}
        w={{ base: "100%", xl: "60%" }}
      >
        <Center borderRadius=".5rem" bg="#EAEAEA">
          <Text color="palette.secondary">Video Dine</Text>
        </Center>
      </AspectRatio>
    </Center>
  );
}

export default VideoPromotion;
