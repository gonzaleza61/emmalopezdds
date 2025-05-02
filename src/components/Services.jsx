import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Services = () => {
  const servicesSectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const servicesSection = servicesSectionRef.current;
    if (servicesSection) {
      const title = servicesSection.querySelector(".section-title");
      const cards = servicesSection.querySelectorAll(".service-card");

      // Animate the title
      gsap.fromTo(
        title,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesSection,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate the cards with a staggered effect
      gsap.fromTo(
        cards,
        {
          y: 50,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesSection,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section id="services" className="services" ref={servicesSectionRef}>
      <div className="max-width-container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card general-service">
            <div className="service-icon">🦷</div>
            <h3>General Dentistry</h3>
            <p>
              Comprehensive check-ups, cleanings, and preventative care for all
              ages.
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
  );
};

export default Services;
