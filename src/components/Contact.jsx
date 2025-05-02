const Contact = () => {
  return (
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
  );
};

export default Contact;
