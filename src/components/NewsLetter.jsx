// components/Newsletter.js
import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
        <form className="flex justify-center space-x-4">
          <input type="email" placeholder="Enter your email address" className="bg-white text-black rounded-full px-6 py-3 w-80 focus:outline-none" />
          <button className="bg-white text-black rounded-full px-6 py-3 font-semibold hover:bg-gray-200 transition">Subscribe to Newsletter</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;