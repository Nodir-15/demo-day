import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Импортируем все страницы
import Homepage from './pages/Homepage.jsx';
import Shop from './pages/Shop.jsx';
import OnSale from './pages/OnSale.jsx';
import NewArrivals from './pages/NewArrivals.jsx';
import Brands from './pages/Brands.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Category from './pages/Category.jsx';
import Cart from './pages/Cart.jsx';
import Profile from './pages/Profile.jsx';

// Компоненты
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Newsletter from './components/NewsLetter.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/on-sale" element={<OnSale />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;