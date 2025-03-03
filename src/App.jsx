import React, { useState, useEffect } from 'react';
import Navbar from './componments/nav bar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/Place order/PlaceOrder';
import Footer from './componments/Footer/Footer';
import LoginPopup from './componments/LoginPopup/LoginPopup';
import BookTable from './pages/BookTable/BookTable';
import OurStory from './pages/OurStory/OurStory';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import EventDetailPage from './pages/EventDetailPage/EventDetailPage';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowLogin(true);
      
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
          <Route
            path="/details"
            element={<DetailsPage category={category} setCategory={setCategory} />}
          />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/book-table' element={<BookTable />} />
          <Route path='/our-story' element={<OurStory />} />
          <Route path="/event-detail" element={<EventDetailPage />}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;