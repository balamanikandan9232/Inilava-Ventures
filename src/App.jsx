import React, { useState } from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Choose from "./Components/Choose";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./StyledComponents/App.css";
import { useAnimations } from "./Hooks/useAnimation";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useAnimations();
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <header className="container">
        <nav className="stack">
          <span className="logo-stack">
            <a href="/">
              <img
                className="logo"
                src="/public/images/C-Logo.png"
                alt="logo"
              />
            </a>
            <span
              className={`h-line ${menuOpen ? "open" : ""}`}
              onClick={handleToggleMenu}
              // tabIndex="0"
            >
              <span className={`line-ct ${menuOpen ? "open" : ""}`}>
                <span className="top-line"></span>
                <span className="bot-line"></span>
              </span>
            </span>
          </span>
          <div className="nav-stacks">
            <ul id="nav" className={`menu-list${menuOpen ? "open" : ""}`}>
              <li>
                <a href="/" onClick={handleLinkClick}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <span className="btn-container">
            <button
              type="submit"
              className="part-btn"
              onClick={() => {
                setMenuOpen(false);
                window.location.href = "#contact";
              }}
            >
              Partner With Us
            </button>
          </span>
        </nav>
      </header>
      <Hero />
      <Choose />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
