import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    // Create a timeline for smoother animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Add cards to timeline with smoother stagger
    cards.forEach((card, index) => {
      tl.fromTo(
        card,
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          delay: index * 0.1,
        },
        index * 0.1
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="services" className="services" ref={servicesRef}>
      <div className="max-width-container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <div
            className="service-card"
            ref={(el) => (cardsRef.current[0] = el)}
          >
            <h3>General Dentistry</h3>
            <p>
              Comprehensive dental care including cleanings, fillings, and
              preventive treatments to maintain your oral health.
            </p>
          </div>
          <div
            className="service-card"
            ref={(el) => (cardsRef.current[1] = el)}
          >
            <h3>Cosmetic Dentistry</h3>
            <p>
              Transform your smile with our cosmetic procedures including
              whitening, veneers, and smile makeovers.
            </p>
          </div>
          <div
            className="service-card"
            ref={(el) => (cardsRef.current[2] = el)}
          >
            <h3>Restorative Dentistry</h3>
            <p>
              Advanced solutions for damaged or missing teeth, including crowns,
              bridges, and dental implants.
            </p>
          </div>
          <div
            className="service-card"
            ref={(el) => (cardsRef.current[3] = el)}
          >
            <h3>Emergency Care</h3>
            <p>
              Prompt attention for dental emergencies, ensuring you receive
              immediate care when you need it most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
