import React, { useState } from 'react';
import './Home.css';
import Header from '../../componments/Header/Header';
import Products from '../../componments/Products/Products';
import AppDownload from '../../componments/AppDownload/AppDownload';
import Events from '../../componments/Events/Events';

const Home = () => {
  return (
    <div>
      <Header />
      <Products />
      <Events />
      <AppDownload />
    </div>
  );
};

export default Home;
