import React from 'react';
import './Header.css';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className='header'>
      <motion.div
        className="header-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          Order your favourite food here
        </motion.h2>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        >
          Choose your diverse menu featuring...
        </motion.p>

        <motion.a
          href="#explore-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <button>View Menu</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Header;
