import { extendTheme } from "@chakra-ui/react";

const colors = {
  palette: {
    primary: "#271f53",
    secondary: "#edecf0",
    tertiary: "#171942",
    accent: "#d450d9",
    // accent_hover: "#FF7202",
  },
};

const fonts = {
  body: `'Bree Serif', serif`,
};

const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
      overflowX: "hidden",
    },
    body: {
      bg: "palette.primary",
      color: "palette.secondary",
    },
    _placeholder: {
      color: "rgba(38, 50, 56, .6)",
      fontSize: ".9rem",
    },
  },
};

const theme = extendTheme({ colors, fonts, styles });
export default theme;
