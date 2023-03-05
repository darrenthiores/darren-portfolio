import { Link, Text } from "@chakra-ui/react";
import useApp from "../../../hooks/useApp";

interface NavLinkProps {
  nav: string;
}

function NavLink(props: NavLinkProps) {
  const { nav } = props;
  const appContext = useApp();

  return (
    <Link
      textDecor="none"
      _hover={{}}
      href={nav === "Home" ? "#hero" : `#${nav.toLowerCase()}`}
    >
      <Text
        display="flex"
        justifyContent="center"
        alignItems="center"
        transition="all .2s ease"
        pos="relative"
        fontWeight={appContext?.activeNav === nav ? "semibold" : "medium"}
        fontSize={appContext?.scrolled ? ".9rem" : ".95rem"}
        color={
          appContext?.activeNav === nav ? "palette.accent" : "palette.secondary"
        }
        _hover={{
          color: "palette.accent",
        }}
      >
        {nav}
      </Text>
    </Link>
  );
}

export default NavLink;
