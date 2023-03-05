import { Box, Divider, HStack, Text, VStack, Wrap } from "@chakra-ui/react";
import breakPoints from "../../../utils/interfaces/Breakpoints";
import CategoryCard from "../components/CategoryCard";
import Category1 from "../../../assets/categories/Kotea.png";
import Category2 from "../../../assets/categories/Knam.png";
import Category3 from "../../../assets/categories/kegg.png";

function Categories() {
  const categories = [
    { name: "KO - TEA", description: "Korean Boba", image: Category1 },
    {
      name: "K - NAM",
      description: "An upside down satisfaction guaranteed",
      image: Category2,
    },
    { name: "K - EGG", description: "Egg, Drop, Roll!", image: Category3 },
  ];

  return (
    <Box paddingBlock="5rem">
      <VStack>
        <Text fontWeight="bold" fontSize="1.8rem" color="palette.secondary">
          OUR CATEGORIES
        </Text>
        <Divider
          borderWidth="2px"
          borderRadius="1rem"
          borderColor="palette.accent"
          w="5rem"
        />
      </VStack>
      <Wrap
        justify="center"
        p="1rem"
        spacing="5rem"
        paddingTop="8rem"
        w={breakPoints}
        margin="auto"
      >
        {categories.map((item) => {
          return (
            <CategoryCard
              key={item.name}
              name={item.name}
              image={item.image}
              description={item.description}
            />
          );
        })}
      </Wrap>
    </Box>
  );
}

export default Categories;
