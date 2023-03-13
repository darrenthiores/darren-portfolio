import { ReactElement } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Logo from "./assets/logo.svg";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./components/navbar/Footer";
import Portfolio from "./pages/portfolio/Portfolio";

function App(): ReactElement {
  return (
    <>
      <Navbar
        navLinks={["Home", "About", "Portfolio", "Contact"]}
        logo={Logo}
      />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
