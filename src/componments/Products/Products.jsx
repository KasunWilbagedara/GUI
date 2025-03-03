import React, { useRef } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Products.css";
import DishImage from "../../assets/Dish.jpg";
import { motion, useInView } from "framer-motion";

function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/details");
    window.scrollTo(0, 0); 
  };

  return (
    <div ref={ref} className="menu-section">
      <motion.div
        className="menu-text"
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2>MENU</h2>
        <p>
        A Progression of rare and beautiful ingredients where texture, flavour and harmony is paramount. Delve into the Quay dining experience with Peter Gilmore’s Menu and a thoughtfully curated Wine List.
        </p>
        <button className="read-more" onClick={handleReadMore}>
          Read more
        </button>
      </motion.div>

      <motion.div
        className="menu-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img src={DishImage} alt="Dining Experience" />
      </motion.div>
    </div>
  );
}

export default Products;
