// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">SHOP.CO</Link>
        <ul className="flex space-x-6">
         <Link to="/shop" className="hover:text-gray-600 transition">Shop</Link>
          <li><Link to="/on-sale" className="hover:text-gray-600 transition">On Sale</Link></li>
          <li><Link to="/new-arrivals" className="hover:text-gray-600 transition">New Arrivals</Link></li>
         <Link to="/brands" className="hover:text-gray-600 transition">Brands</Link>
        </ul>
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Search for products..." className="border rounded-full px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-black" />
          <Link to="/cart" className="hover:scale-105 transition">🛒</Link>
          <Link to="/account" className="hover:scale-105 transition">👤</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;