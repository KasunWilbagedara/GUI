import React from 'react';
import './Header.css';
import { motion } from 'framer-motion';
import backgroundImage from '../../assets/background2.jpg'; 

const Header = () => {
  return (
    <div className="header" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <motion.div
        className="header-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.h1
          className="restaurant-name"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          Golden Restaurant
        </motion.h1>

      

       
      </motion.div>
    </div>
  );
};

export default Header;
