import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="dental-website">
      {/* Header/Navigation */}
      <header>
        <div className="max-width-container">
          <div className="logo-container">
            <a href="#" className="logo-link">
              <img
                src="/emmalogotr.svg"
                alt="Emma Lopez DDS"
                className="logo-image"
              />
            </a>
          </div>
          <nav className={isMenuOpen ? "open" : ""}>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="cta-button">
                  Book Appointment
                </a>
              </li>
            </ul>
          </nav>
          <button
            className={`mobile-menu-button ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <h2>
              <img
                src="/emmalogolandscapetr.svg"
                alt="Emma Lopez DDS"
                className="logo-image"
              />
            </h2>
            <div className="footer-contact">
              <p>5206 Irvington Blvd, Houston, TX 77009</p>
              <p>(555) 123-4567</p>
              <p>info@emmalopezdds.com</p>
            </div>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Emma Lopez DDS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
