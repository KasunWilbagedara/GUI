import React, { useState, useEffect } from 'react';
import Navbar from './componments/nav bar/Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/Place order/PlaceOrder';
import Footer from './componments/Footer/Footer';
import LoginPopup from './componments/LoginPopup/LoginPopup';
import BookTable from './pages/BookTable/BookTable';
import OurStory from './pages/OurStory/OurStory';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import EventDetailPage from './pages/EventDetailPage/EventDetailPage';
import './App.css'; 

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const hasVisited = localStorage.getItem('isAuthenticated');
    if (!hasVisited) {
      setShowLogin(true); 
    } else {
      setIsAuthenticated(true); 
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setShowLogin(false);
    localStorage.setItem('isAuthenticated', 'true'); 
  };

  
  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/" />;
  };

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} onLoginSuccess={handleLoginSuccess} />}
      <div className={`app ${showLogin ? 'blurred' : ''}`}>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route
            path="/details"
            element={<ProtectedRoute element={<DetailsPage category={category} setCategory={setCategory} />} />}
          />
          <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
          <Route path="/order" element={<ProtectedRoute element={<PlaceOrder />} />} />
          <Route path="/book-table" element={<ProtectedRoute element={<BookTable />} />} />
          <Route path="/our-story" element={<ProtectedRoute element={<OurStory />} />} />
          <Route path="/event-detail" element={<ProtectedRoute element={<EventDetailPage />} />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;