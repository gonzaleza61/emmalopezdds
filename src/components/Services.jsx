import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef(null);
  const cardsRef = useRef([]);
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current;
    const grid = gridRef.current;

    // Initial animation for cards
    cards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power3.out",
      });
    });

    // Grid rearrangement animation
    ScrollTrigger.create({
      trigger: servicesRef.current,
      start: "top 20%",
      onEnter: () => {
        grid.classList.add("rearrange");
      },
      onLeaveBack: () => {
        grid.classList.remove("rearrange");
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="services" className="services" ref={servicesRef}>
      <div className="max-width-container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid" ref={gridRef}>
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
