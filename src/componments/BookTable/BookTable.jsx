import React from 'react';
import './BookTable.css'; // You can reuse the Contact.css or create a new one

const BookTable = () => {
  return (
    <div className="contact-container">
      <h2>BOOK A TABLE</h2>
      <p>Reserve your spot at our restaurant</p>
      <p>Need to book a table for a special occasion or a group event?</p>
      <p>Hit us up! Our team is here to help you plan your next gathering.</p>

      <div className="contact-info">
        <h3>HEADQUARTERS BY W15</h3>
        <p>Email: <a href="mailto:info@w15.lk">info@w15.lk</a></p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="date" placeholder="Date" required />
        <input type="time" placeholder="Time" required />
        <input type="number" placeholder="Number of Guests" required />
        <textarea placeholder="Special Requests" required></textarea>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default BookTable;