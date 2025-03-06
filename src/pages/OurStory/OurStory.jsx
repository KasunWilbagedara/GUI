import React, { useRef } from "react";
import "./OurStory.css";
import { motion, useInView } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import founderImage from "../../assets/founder.jpg"; 
import cultureImage from "../../assets/culture.jpg"; 

const OurStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" }); 
  const navigate = useNavigate();
  const handleReadMore = () => {
    navigate('/our-story'); 
    window.scrollTo(0, 0);  
  };

  return (
    <div ref={ref} className="our-story-container">
      
      <motion.div
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="hero-title"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Our Story
        </motion.h1>
      </motion.div>

      
      <motion.div 
        className="content-section story-background full-size-section"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <motion.img 
          src={cultureImage} 
          alt="Our Story" 
          className="story-image"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.div 
          className="story-text"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <h2>Crafting Culinary Excellence</h2>
          <p>
            Our journey began with a passion for quality ingredients and authentic flavors. Every dish we create is a testament to our dedication to delivering exceptional dining experiences. From farm to table, we ensure that every step in our process reflects our commitment to excellence.
          </p>
        </motion.div>
      </motion.div>

      
      <motion.div 
        className="founder-section founder-background full-size-section"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <motion.div 
          className="founder-text"
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h2>Our Founder</h2>
          <p>
            A visionary with a passion for craftsmanship, our founder dedicated years to 
            perfecting the art of excellence. His commitment to quality and innovation 
            continues to inspire us every day.
          </p>
        </motion.div>
        <motion.img 
          src={founderImage} 
          alt="Founder" 
          className="founder-image"
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  );
};

export default OurStory;