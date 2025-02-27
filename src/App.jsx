import React, { useState, useEffect } from 'react';
import Navbar from './componments/nav bar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/Place order/PlaceOrder';
import Footer from './componments/Footer/Footer';
import LoginPopup from './componments/LoginPopup/LoginPopup';
import BookTable from './pages/BookTable/BookTable'; // Import the new BookTable component

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    // Check if user has visited before using localStorage
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowLogin(true);
      // Set flag in localStorage to mark first visit
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/book-table' element={<BookTable />} /> {/* Add the new route */}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;