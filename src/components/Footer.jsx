// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-5 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">SHOP.CO</h3>
          <p className="text-sm">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:scale-105 transition">🐦</a>
            <a href="#" className="hover:scale-105 transition">📘</a>
            <a href="#" className="hover:scale-105 transition">📸</a>
            <a href="#" className="hover:scale-105 transition">▶️</a>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-300 transition">About</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Features</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Works</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Career</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">HELP</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-300 transition">Customer Support</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Delivery Details</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">FAQ</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-300 transition">Account</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Manage Deliveries</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Orders</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Payments</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">RESOURCES</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-300 transition">Free eBooks</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Development Tutorial</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">How to - Blog</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Youtube Playlist</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 flex justify-between items-center text-sm">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="flex space-x-4">
          <img src="/visa.png" alt="Visa" className="h-6" />
          <img src="/mastercard.png" alt="Mastercard" className="h-6" />
          <img src="/paypal.png" alt="Paypal" className="h-6" />
          <img src="/applepay.svg" alt="Apple Pay" className="h-6" />
          <img src="/gpay.png" alt="Google Pay" className="h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;