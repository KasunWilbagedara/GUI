import React from "react";
import "./BookTable.css";
import { motion } from "framer-motion";
import TableImage from "../../assets/table.jpg"; 

const BookTable = () => {
  return (
    <motion.div 
      className="book-table-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 
        className="title"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        BOOK A TABLE
      </motion.h2>

      <div className="content-wrapper">
        
        <motion.div 
          className="form-container"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="date" required />
            <input type="time" required />
            <input type="number" placeholder="Number of Guests" required />
            <textarea placeholder="Special Requests" required></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </motion.div>

        
        <div className="right-container">
          {/* Image */}
          <motion.div 
            className="image-container"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <img src={TableImage} alt="Restaurant" />
          </motion.div>

         
          <motion.div 
            className="info-container"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h3>Where to Find Us</h3>
            <p><strong>GOLDEN RESTAURANT</strong></p>
            <p>Email: <a href="mailto:HACKCHECK@gmail.com">HACKCHECK@gmail.com</a></p>
            <p>Address: 123 Main Street, Gotham City</p>
            <p>Phone: +1 (555) 123-4567</p>
          </motion.div>
        </div>
      </div>

      
      <div className="map-section">
        <motion.div 
          className="map-container"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h3>Find Us on Google Maps</h3>
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798891103!2d-74.25986791804208!3d40.69767006377345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af6b098f45%3A0x851cb3e4d94e1d5!2sNew%20York!5e0!3m2!1sen!2sus!4v1617744005641!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: 0, filter: "invert(90%)" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BookTable;
