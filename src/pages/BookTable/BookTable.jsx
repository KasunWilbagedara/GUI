import React, { useState } from "react";
import "./BookTable.css";
import { motion } from "framer-motion";
import TableImage from "../../assets/Book.jpg"; 

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5174/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setSubmitStatus('success');
        
        setFormData({
          name: '',
          email: '',
          date: '',
          time: '',
          guests: '',
          specialRequests: ''
        });
        console.log('Reservation successful:', result);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting reservation:', error);
    }
  };

  return (
    <motion.div 
      className="book-table-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }} 
    >
      <motion.div 
        className="image-top-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }} 
      >
        <img 
          src={TableImage}  
          alt="Restaurant" 
          className="top-image" 
        />
        <motion.h2 
          className="title"
          initial={{ y: -100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 1, 
            delay: 0.3,   
            ease: "easeOut" 
          }}
        >
          Reservations
        </motion.h2>
      </motion.div>

      <div className="content-wrapper">
        <motion.div 
          className="form-container"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <input 
              type="date" 
              name="date"
              value={formData.date}
              onChange={handleChange}
              required 
            />
            <input 
              type="time" 
              name="time"
              value={formData.time}
              onChange={handleChange}
              required 
            />
            <input 
              type="number" 
              name="guests"
              placeholder="Number of Guests" 
              value={formData.guests}
              onChange={handleChange}
              required 
            />
            <textarea 
              name="specialRequests"
              placeholder="Special Requests" 
              value={formData.specialRequests}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">SUBMIT</button>
          </form>
          {submitStatus === 'success' && <p className="success-message">Reservation submitted successfully!</p>}
          {submitStatus === 'error' && <p className="error-message">Error submitting reservation. Please try again.</p>}
        </motion.div>

        <div className="right-container">
          <motion.div 
            className="map-container"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h3>Find Us on Google Maps</h3>
            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798891103!2d-74.25986791804208!3d40.69767006377345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af6b098f45%3A0x851cb3e4d94e1d5!2sNew%20York!5e0!3m2!1sen!2sus!4v1617744005641!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0, filter: "invert(90%)" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
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
            <p>Phone: +1 (555) 123-4567</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookTable;