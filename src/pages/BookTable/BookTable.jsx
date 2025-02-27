import React from 'react';
import './BookTable.css';

const BookTable = () => {
  return (
    <div className="book-table-container">
      <h2>BOOK A TABLE</h2>
      <p>Reserve your spot at our restaurant</p>
      <p>Need to book a table for a special occasion or a group event?</p>
      <p>Hit us up! Our team is here to help you plan your next gathering.</p>

      <div className="contact-info">
        <h3>GOLDEN RESTURANT</h3>
        <p>Email: <a href="mailto:info@w15.lk">HACKCHECK@gmail</a></p>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <h3>Find Us</h3>
        <iframe
          title="Restaurant Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798511757735!2d79.8527583153281!3d6.921038220394017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593b7c7b3b1d%3A0x3b7c7b3b1d3b7c7b!2sYour%20Restaurant%20Name!5e0!3m2!1sen!2slk!4v1631234567890!5m2!1sen!2slk"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
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