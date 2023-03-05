import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./utils/interfaces/theme";
import "@fontsource/bree-serif/400.css";
import "@fontsource/inter/400.css";

import AppContext from "./context/AppContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AppContext>
        <App />
      </AppContext>
    </ChakraProvider>
  </React.StrictMode>
);
