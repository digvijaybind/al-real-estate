import logo from "./logo.svg";
import "./App.css";
import {HelmetProvider} from "react-helmet-async";
import Landing from "./pages/Landing";
import useWindowSize from "./hooks/useWindowSize";
import Footer from "./components/footer/Footer";
import HamburgerMenu from "./components/header/Hamburger";
import { useState } from "react";
import Header from "./components/header/Header";

function App() {
  const {width} = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = width < 768;

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <HelmetProvider>
      {/* Conditional Rendering */}
      {isMobile ? (
        <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      ) : (
        <Header />
      )}
      <main className="App">
        <Landing />
      </main>
      <Footer />
    </HelmetProvider>
  );
}

export default App;
