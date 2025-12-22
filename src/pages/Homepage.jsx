// pages/Homepage.js
import React from 'react';
import ProductCard from '../components/ProductCard';

// Hardcoded data from screenshots
const newArrivals = [
  { id: 1, name: 'T-Shirt with Tape Details', image: '/Frame 32.png', price: 120, rating: 4 },
  { id: 2, name: 'Skinny Fit Jeans', image: '/Frame 33.png', price: 240, rating: 3.5 },
  { id: 3, name: 'Checkered Shirt', image: '/Frame 34.png', price: 180, rating: 4.5 },
  { id: 4, name: 'Sleeve Striped T-Shirt', image: '/Frame 38.png', price: 130, rating: 4.5 },
];

const topSelling = [
  { id: 5, name: 'Vertical Striped Shirt', image: '/vss.png', price: 212, oldPrice: 232, discount: 20, rating: 5 },
  { id: 6, name: 'Courage Graphic T-Shirt', image: '/cgts.png', price: 145, rating: 4 },
  { id: 7, name: 'Loose Fit Bermuda Shorts', image: '/loose fit.png', price: 80, rating: 3 },
  { id: 8, name: 'Faded Skinny Jeans', image: '/Faded skinny.png', price: 210, rating: 4.5 },
];

const styles = [
  { name: 'Casual', image: '/Frame 61.png' },
  { name: 'Formal', image: '/Frame 62.png' },
  { name: ' ', image: '/Frame 64.png' },
  { name: ' ', image: '/Frame 63.png' },
];

const customers = [
  { name: 'Sarah M.', review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”", rating: 5 },
  { name: 'Alex K.', review: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.', rating: 5 },
  { name: 'James L.', review: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have found Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.", rating: 5 },
];

const Homepage = () => {
  return (
    <main className="max-w-7xl mx-auto px-4">
      {/* Hero */}
      <section className="py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Find Clothes That Matches Your Style</h1>
        <p className="text-gray-600 mb-8">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button className="bg-black text-white rounded-full px-8 py-4 font-semibold hover:bg-gray-800 transition">Shop Now</button>
        <div className="flex justify-center space-x-12 mt-8">
          <div><span className="text-3xl font-bold">200+</span><p>International Brands</p></div>
          <div><span className="text-3xl font-bold">2,000+</span><p>High-Quality Products</p></div>
          <div><span className="text-3xl font-bold">30,000+</span><p>Happy Customers</p></div>
        </div>
        <div className="bg-black py-10 mt-8">
        <div className="flex justify-center space-x-10 mt-8 gap-7">
          <img src="/Group.svg" alt="Versace" className="h-8" />
          <img src="/zlg.svg" alt="Zara" className="h-8" />
          <img src="/gcc.svg" alt="Gucci" className="h-8" />
          <img src="/plg.svg" alt="Prada" className="h-8" />
          <img src="/clkl.svg" alt="Calvin Klein" className="h-8" />
        </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-center mb-8">NEW ARRIVALS</h2>
        <div className="grid grid-cols-4 gap-6">
          {newArrivals.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      {/* Top Selling */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-center mb-8">TOP SELLING</h2>
        <div className="grid grid-cols-4 gap-6">
          {topSelling.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      {/* Browse by Style */}
      <section className="py-8 bg-gray-100 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">BROWSE BY DRESS STYLE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {styles.map(style => (
            <div key={style.name} className="relative overflow-hidden rounded-lg">
              <img src={style.image} alt={style.name} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
              <h3 className="absolute top-4 left-4 text-2xl font-bold">{style.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Happy Customers */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-center mb-8">OUR HAPPY CUSTOMERS</h2>
        <div className="grid grid-cols-3 gap-6">
          {customers.map((customer, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex mb-2">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className={j < customer.rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                ))}
              </div>
              <h3 className="font-semibold">{customer.name}</h3>
              <p className="text-gray-600 mt-2">{customer.review}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Homepage;