const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="max-width-container">
        <h2 className="section-title">What Our Patients Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>
              "Dr. Lopez and her team are exceptional. They made me feel
              comfortable and at ease during my entire visit. The attention to
              detail and personalized care is outstanding."
            </p>
            <h4>- James Wilson</h4>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>
              "Our entire family trusts Dr. Lopez with our dental care. She's
              amazing with children and provides excellent care for everyone.
              The office is always welcoming and professional."
            </p>
            <h4>- Maria Garcia</h4>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>
              "I used to be anxious about dental visits, but Dr. Lopez's gentle
              approach and caring demeanor have completely changed that. Now I
              actually look forward to my appointments!"
            </p>
            <h4>- Robert Taylor</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
