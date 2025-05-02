import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const aboutSection = aboutSectionRef.current;
    if (aboutSection) {
      const aboutElements = aboutSection.querySelectorAll(
        ".about-text h2, .about-text p, .features-list li"
      );

      gsap.fromTo(
        aboutElements,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutSection,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" className="intro-about" ref={aboutSectionRef}>
      <div className="max-width-container">
        <div className="intro-about-content">
          <div className="about-grid">
            <div className="about-text">
              <h2>About Our Practice</h2>
              <p>
                At our clinic, your comfort and care come first. We are
                passionate about creating a welcoming environment where patients
                of all ages can feel relaxed and confident in their dental care.
                Using state-of-the-art technology and a gentle approach, we
                deliver personalized treatments that support long-term oral
                health and radiant smiles.
              </p>
              <p>
                Whether you're here for a routine check-up, cosmetic
                enhancement, or restorative procedure, our dedicated team is
                committed to making every visit positive, informative, and
                stress-free.
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
                  <span className="feature-text">
                    Family-friendly atmosphere
                  </span>
                </li>
                <li>
                  <span className="feature-text">
                    Convenient location and flexible scheduling
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
