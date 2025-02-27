import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>CONTACT</h2>
      <p>Get in touch with us</p>
      <p>Need info on Headquarters by W15, events, and awesome deals?</p>
      <p>Hit us up! Our team is here to help you plan your next epic.</p>

      <div className="contact-info">
        <h3>HEADQUARTERS BY W15</h3>
        <p>Email: <a href="mailto:info@w15.lk">info@w15.lk</a></p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;