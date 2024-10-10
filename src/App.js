// src/App.js
import logo from "./logo.svg";
import "./App.css";
import {HelmetProvider} from "react-helmet-async";
import Landing from "./pages/Landing";
import {FloatingWhatsApp} from "react-floating-whatsapp";
import useWindowSize from "./hooks/useWindowSize";
import Footer from "./components/footer/Footer";
import HamburgerMenu from "./components/header/Hamburger";
import {useState} from "react";
import Header from "./components/header/Header";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"; // Import Router components
import ContactUsForm from "./pages/ContactUsForm";

function App() {
  const {width} = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = width < 768;

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const phoneNumber = "+971568835862";

  const handleOpen = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <HelmetProvider>
      <Router>
        {/* Conditional Rendering */}
        {isMobile ? (
          <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        ) : (
          <Header />
        )}

        <main className="App">
          <Routes>
            <Route path="/" element={<Landing />} /> 
            <Route path="/contact" element={<ContactUsForm />} />{" "}
          
          </Routes>
        </main>

        <FloatingWhatsApp
          accountName="Real estate"
          allowEsc
          allowClickAway
          onClick={handleOpen}
        />
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
