import { useRef, useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroContentRef = useRef(null);

  useEffect(() => {
    const heroContent = heroContentRef.current;
    if (heroContent) {
      const elements = heroContent.querySelectorAll("h2, p, .hero-buttons");

      gsap.fromTo(
        elements,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <section className="hero">
      <div className="hero-split">
        <div className="hero-logo">
          <img
            src="/emmalogotr.svg"
            alt="Emma Lopez DDS"
            className="hero-logo-image"
          />
        </div>
        <div className="hero-content" ref={heroContentRef}>
          <div className="max-width-container">
            <h2>A Healthier, Brighter Smile Awaits</h2>
            <p>
              Comprehensive dental care with a gentle touch. Whether you're due
              for a check-up or dreaming of a new smile, we're here to help you
              shine.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="cta-button">
                <span>Book Appointment</span>
              </a>
              <a href="#about" className="secondary-button">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
