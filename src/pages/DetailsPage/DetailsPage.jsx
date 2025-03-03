import React, { useState, useRef } from 'react';
import './DetailsPage.css';
import MenuImage from "../../assets/DetailsHead.jpg";
import ExploreMenu from "../../componments/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../componments/FoodDisplay/FoodDisplay";

const DetailsPage = () => {
  const [category, setCategory] = useState("All");
  const exploreMenuRef = useRef(null); 

  
  const handleViewMenuClick = () => {
    if (exploreMenuRef.current) {
      exploreMenuRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      
    }
  };
  

  return (
    <div className="details-page">
      <div className="menu-section">
        <div className="menu-text">
          <h2>MENU</h2>
          <p>
            Quay is a progression of rare and beautiful ingredients where texture, flavour, and harmony are paramount.
          </p>
          <p>
            Continually inspired by nature, the creative process for chef Peter Gilmore begins in working closely with
            farmers, fishermen, producers, and artisans who cultivate bespoke produce exclusively for Quay.
          </p>
          
          <button className="view-menu-btn" onClick={handleViewMenuClick}>View Menu</button>
        </div>
        <div className="menu-image">
          <img src={MenuImage} alt="Menu Experience" />
        </div>
      </div>

      
      <div ref={exploreMenuRef}> 
        <ExploreMenu category={category} setCategory={setCategory} />
      </div>
      <FoodDisplay category={category} />
    </div>
  );
};

export default DetailsPage;
