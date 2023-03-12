import { Divider, Highlight, Text, VStack } from "@chakra-ui/react";
import React from "react";

function SectionTItle({ title, colored }: { title: string; colored: string }) {
  return (
    <VStack>
      <Text fontSize="2rem" fontWeight="bold">
        <Highlight query={colored} styles={{ color: "palette.accent" }}>
          {title}
        </Highlight>
      </Text>
      <Divider w="5rem" />
    </VStack>
  );
}

export default SectionTItle;
