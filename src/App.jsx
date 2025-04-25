import { useState } from "react";
import "./App.css";

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

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-split">
          <div className="hero-logo">
            <img
              src="/emmalogotr.svg"
              alt="Emma Lopez DDS"
              className="hero-logo-image"
            />
          </div>
          <div className="hero-content">
            <div className="max-width-container">
              <h2>A Healthier, Brighter Smile Awaits</h2>
              <p>
                Comprehensive dental care with a gentle touch. Whether you're
                due for a check-up or dreaming of a new smile, we're here to
                help you shine.
              </p>
              <div className="hero-buttons">
                <a href="#contact" className="cta-button">
                  <span>Book Appointment</span>
                </a>
                <a href="#services" className="secondary-button">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New About Us Section */}
      <section className="intro-about">
        <div className="max-width-container">
          <div className="intro-about-content">
            <h2>About Our Practice</h2>
            <p>
              At our clinic, your comfort and care come first. We are passionate
              about creating a welcoming environment where patients of all ages
              can feel relaxed and confident in their dental care. Using
              state-of-the-art technology and a gentle approach, we deliver
              personalized treatments that support long-term oral health and
              radiant smiles.
            </p>
            <p>
              Whether you're here for a routine check-up, cosmetic enhancement,
              or restorative procedure, our dedicated team is committed to
              making every visit positive, informative, and stress-free.
            </p>
            <h3>Why Choose Us?</h3>
            <ul className="features-list">
              <li>
                <span className="feature-text">
                  Compassionate, patient-centered care
                </span>
              </li>
              <li>
                <span className="feature-text">
                  Modern technology and gentle techniques
                </span>
              </li>
              <li>
                <span className="feature-text">Family-friendly atmosphere</span>
              </li>
              <li>
                <span className="feature-text">
                  Convenient location and flexible scheduling
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="max-width-container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card general-service">
              <div className="service-icon">🦷</div>
              <h3>General Dentistry</h3>
              <p>
                Comprehensive check-ups, cleanings, and preventative care for
                all ages.
              </p>
            </div>
            <div className="service-card cosmetic-service">
              <div className="service-icon">✨</div>
              <h3>Cosmetic Dentistry</h3>
              <p>
                Teeth whitening, veneers, and smile makeovers to enhance your
                smile.
              </p>
            </div>
            <div className="service-card crown-service">
              <div className="service-icon">👑</div>
              <h3>Crown Placement</h3>
              <p>
                Restore damaged teeth with custom-made crowns for strength and
                aesthetics.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">😁</div>
              <h3>Orthodontics</h3>
              <p>Traditional braces and clear aligners for straighter teeth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="max-width-container">
          <h2 className="section-title">What Our Patients Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>
                "The best dental experience I've ever had. Dr. Johnson and her
                team made me feel comfortable and at ease."
              </p>
              <h4>- James Wilson</h4>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>
                "My entire family comes to Bright Smile Dental. They're amazing
                with kids and provide excellent care for everyone."
              </p>
              <h4>- Maria Garcia</h4>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>
                "I was terrified of dental work until I found this practice. Now
                I actually look forward to my appointments!"
              </p>
              <h4>- Robert Taylor</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="max-width-container">
          <div className="contact-info">
            <h2 className="section-title">Contact Us</h2>
            <div className="info-item">
              <strong>Address:</strong> 5206 Irvington Blvd, Houston, TX 77009
            </div>
            <div className="info-item">
              <strong>Phone:</strong> (555) 123-4567
            </div>
            <div className="info-item">
              <strong>Email:</strong> info@emmalopezdds.com
            </div>
            <div className="info-item">
              <strong>Hours:</strong>
              <p>Monday-Friday: 8am-6pm</p>
              <p>Saturday: 9am-2pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6923.938894412026!2d-95.36329902455954!3d29.807427029761932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8e53187f24b%3A0xf6a57095a9c45ac!2s5206%20Irvington%20Blvd%2C%20Houston%2C%20TX%2077009!5e0!3m2!1sen!2sus!4v1743613597007!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <h2>
              <img
                src="/emmalogotr.svg"
                alt="Emma Lopez DDS"
                className="logo-image"
              />
            </h2>
            <p>Your partner in dental health</p>
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
          <div className="footer-social">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                FB
              </a>
              <a href="#" aria-label="Instagram">
                IG
              </a>
              <a href="#" aria-label="Twitter">
                TW
              </a>
              <a href="#" aria-label="LinkedIn">
                LI
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Bright Smile Dental. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
