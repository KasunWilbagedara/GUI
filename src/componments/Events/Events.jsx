import React, { useRef } from 'react';
import './Events.css'; 
import EventImage from "../../assets/Event.jpg"; 
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const navigate = useNavigate(); 

  const handleReadMore = () => {
    navigate("/our-story");
    window.scrollTo(0, 0); 
  };

  return (
    <div ref={ref} className="events-section">
      <motion.div
        className="events-image"
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img src={EventImage} alt="Event Image" />
      </motion.div>

      <motion.div
        className="events-text"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2>Celebrate at One of Australia's Most Awarded Restaurants</h2>
        <p>
          Celebrate at one of Australia’s most awarded restaurants, with panoramic views encompassing the Sydney Harbour Bridge and Sydney Opera House.
          From intimate dinner parties in the Private Dining Room, to long lunches in the spectacular Upper Tower, to large cocktail events in The Green Room – 
          Quay delivers an immersive dining experience with views like no other.
        </p>
        
        <button className="read-more" onClick={handleReadMore}>Read More</button>
      </motion.div>
    </div>
  );
};

export default Events;
