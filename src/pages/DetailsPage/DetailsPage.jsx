import React, { useState, useRef } from 'react';
import './DetailsPage.css';
import MenuImage from "../../assets/DetailsHead.jpg";
import ExploreMenu from "../../componments/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../componments/FoodDisplay/FoodDisplay";
import { motion, useInView } from "framer-motion";

const DetailsPage = () => {
  const [category, setCategory] = useState("All");
  const exploreMenuRef = useRef(null);
  // Add useInView hook for the animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleViewMenuClick = () => {
    if (exploreMenuRef.current) {
      exploreMenuRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="details-page">
      <div ref={ref} className="menu-section">
        <motion.div // Fixed typo: "motion.dev" -> "motion.div"
          className="menu-text"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2>MENU</h2>
          <p>
            Quay is a progression of rare and beautiful ingredients where texture, flavour, and harmony are paramount.
          </p>
          <p>
            Continually inspired by nature, the creative process for chef Peter Gilmore begins in working closely with
            farmers, fishermen, producers, and artisans who cultivate bespoke produce exclusively for Quay.
          </p>
          
          <button className="view-menu-btn" onClick={handleViewMenuClick}>
            View Menu
          </button>
        </motion.div>

        <motion.div
          className="menu-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        > {/* Fixed: Added closing > and proper img syntax */}
          <img src={MenuImage} alt="Menu Experience" />
        </motion.div>
      </div>

      <div ref={exploreMenuRef}>
        <ExploreMenu category={category} setCategory={setCategory} />
      </div>
      <FoodDisplay category={category} />
    </div>
  );
};

export default DetailsPage;