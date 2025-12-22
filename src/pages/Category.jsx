// pages/Category.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

// Hardcoded data
const products = [
  { id: 13, name: 'Gradient Graphic T-Shirt', image: './gradient.png', price: 145, rating: 4 },
  { id: 14, name: 'Polo with Tipping Details', image: './polo.png', price: 180, rating: 4.5 },
  { id: 15, name: 'Black Striped T-Shirt', image: './black.png', price: 120, oldPrice: 150, discount: 30, rating: 5 },
  { id: 16, name: 'Skinny Fit Jeans', image: './Frame 33.png', price: 240, rating: 3.5 },
  { id: 17, name: 'Checkered Shirt', image: './Frame 34.png', price: 180, rating: 4.5 },
  { id: 18, name: 'Sleeve Striped T-Shirt', image: './Frame 38.png', price: 130, rating: 4.5 },
  { id: 19, name: 'Vertical Striped Shirt', image: './vss.png', price: 212, oldPrice: 232, discount: 20, rating: 5 },
  { id: 20, name: 'Courage Graphic T-Shirt', image: './cgts.png', price: 145, rating: 4 },
  // Add more to match screenshot if needed
];

const Category = () => {
  const { category } = useParams();

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-4 gap-8">
      {/* Filters */}
      <aside className="col-span-1">
        <h3 className="font-bold mb-4">Filters</h3>
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Casual</h4>
          <ul className="space-y-1 text-sm">
            <li>T-Shirts</li>
            <li>Shirts</li>
            <li>Shorts</li>
            <li>Jeans</li>
            <li>Hoodie</li>
            <li>Jackets</li>
          </ul>
        </div>
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Price</h4>
          <input type="range" min="0" max="500" className="w-full" />
          <div className="flex justify-between text-sm">
            <span>$0</span>
            <span>$500+</span>
          </div>
        </div>
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Colors</h4>
          <div className="grid grid-cols-5 gap-2">
            <div className="w-6 h-6 bg-black rounded-full"></div>
            <div className="w-6 h-6 bg-white border rounded-full"></div>
            <div className="w-6 h-6 bg-red-500 rounded-full"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="w-6 h-6 bg-green-500 rounded-full"></div>
            {/* More colors */}
          </div>
        </div>
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Size</h4>
          <ul className="space-y-1 text-sm">
            <li>Small</li>
            <li>Medium</li>
            <li>Large</li>
            <li>X Large</li>
            <li>XX Large</li>
          </ul>
        </div>
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Dress Style</h4>
          <ul className="space-y-1 text-sm">
            <li>Casual</li>
            <li>Formal</li>
            <li>Party</li>
            <li>Gym</li>
          </ul>
        </div>
        <button className="bg-black text-white rounded-full px-6 py-2 w-full hover:bg-gray-800 transition">Apply Filter</button>
      </aside>

      {/* Products */}
      <div className="col-span-3">
        <h1 className="text-3xl font-bold mb-2">Casual</h1>
        <p className="text-sm text-gray-600 mb-8">Showing 1-10 of 100 Products <span className="ml-2">Sort by: Most Popular</span></p>
        <div className="grid grid-cols-3 gap-6">
          {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          <button className="border rounded-full px-4 py-2">Previous</button>
          <button className="bg-black text-white rounded-full px-4 py-2">1</button>
          <button className="border rounded-full px-4 py-2">2</button>
          <button className="border rounded-full px-4 py-2">Next</button>
        </div>
      </div>
    </main>
  );
};

export default Category;