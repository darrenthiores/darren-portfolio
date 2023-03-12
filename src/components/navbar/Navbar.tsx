import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Link,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import useApp from "../../hooks/useApp";
import { NavItems } from "../../utils/interfaces/AppInterfaces";
import breakPoints from "../../utils/interfaces/Breakpoints";
import container, { item } from "../../utils/motionVariants";
import NavLink from "./components/NavLink";

function Navbar(props: NavItems): ReactElement {
  const { logo, navLinks } = props;
  const appContext = useApp();

  // TRACK SCREEN SIZE TO ADJUST THE NAV APPEARANCE
  const [isSmallerThan850] = useMediaQuery("(max-width: 48em)");

  return (
    <Box
      w="100%"
      pos="fixed"
      zIndex={999}
      transition="all .3s ease"
      bg={appContext?.scrolled ? "palette.primary" : ""}
      h={appContext?.scrolled ? "4.5rem" : "6rem"}
      boxShadow={
        appContext?.scrolled ? "0 1px 15px rgba(43, 39, 62, .5)" : "none"
      }
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        h="100%"
        margin="auto"
        w={breakPoints}
        as={motion.div}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* LOGO */}
        <Link as={motion.a} variants={item} href="#hero">
          <Image transition="all .3s ease" w="6rem" src={logo} />
        </Link>
        {/* NAVIGATION LINKS */}
        {isSmallerThan850 ? (
          <Text>Mobile View</Text>
        ) : (
          <HStack spacing="2rem">
            {navLinks.map((nav) => {
              return <NavLink nav={nav} key={nav} />;
            })}
          </HStack>
        )}
      </Flex>
    </Box>
  );
}

export default Navbar;
