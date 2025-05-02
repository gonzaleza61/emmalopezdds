const Testimonials = () => {
  return (
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
              "I was terrified of dental work until I found this practice. Now I
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
