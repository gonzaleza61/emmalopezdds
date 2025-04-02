import { useState } from "react";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="dental-website">
      {/* Header/Navigation */}
      <header>
        <div className="logo-container">
          <h1>
            Emma Lopez <span className="dds-text">DDS</span>
          </h1>
        </div>
        <div
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={isMenuOpen ? "open" : ""}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About Us</a>
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
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h2>Your Perfect Smile Begins Here</h2>
          <p>
            Providing exceptional dental care for the whole family in a
            comfortable environment.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="primary-button">
              Book Appointment
            </a>
            <a href="#services" className="secondary-button">
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🦷</div>
            <h3>General Dentistry</h3>
            <p>
              Comprehensive check-ups, cleanings, and preventative care for all
              ages.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">✨</div>
            <h3>Cosmetic Dentistry</h3>
            <p>
              Teeth whitening, veneers, and smile makeovers to enhance your
              smile.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">👑</div>
            <h3>Restorative Care</h3>
            <p>
              Fillings, crowns, bridges, and implants to restore your dental
              health.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">😁</div>
            <h3>Orthodontics</h3>
            <p>Traditional braces and clear aligners for straighter teeth.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about">
        <div className="about-content">
          <h2 className="section-title">About Bright Smile Dental</h2>
          <p>
            With over 15 years of experience, our team of dental professionals
            is committed to providing the highest quality care in a warm,
            welcoming environment.
          </p>
          <p>
            We combine the latest technology with compassionate service to
            ensure your dental experience is comfortable and effective.
          </p>
        </div>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-photo"></div>
            <h3>Dr. Sarah Johnson</h3>
            <p>Lead Dentist</p>
          </div>
          <div className="team-member">
            <div className="member-photo"></div>
            <h3>Dr. Michael Chen</h3>
            <p>Orthodontist</p>
          </div>
          <div className="team-member">
            <div className="member-photo"></div>
            <h3>Dr. Lisa Rodriguez</h3>
            <p>Cosmetic Specialist</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
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
              "I was terrified of dental work until I found this practice. Now I
              actually look forward to my appointments!"
            </p>
            <h4>- Robert Taylor</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
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
        <div className="contact-form">
          <h3>Book an Appointment</h3>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <div className="form-group">
              <select required>
                <option value="" disabled selected>
                  Select Service
                </option>
                <option value="general">General Dentistry</option>
                <option value="cosmetic">Cosmetic Dentistry</option>
                <option value="restorative">Restorative Care</option>
                <option value="orthodontics">Orthodontics</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                placeholder="Additional Information"
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="primary-button">
              Request Appointment
            </button>
          </form>
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
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <h2>
              Emma Lopez <span className="dds-text">DDS</span>
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
                <a href="#about">About Us</a>
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
