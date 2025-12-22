import React from 'react';
import ProductCard from '../components/ProductCard';

// Все продукты (объединил из разных секций + добавил ещё для полноты)
const allProducts = [
  { id: 1, name: 'T-Shirt with Tape Details', image: '/Frame 32.png', price: 120, rating: 4.5 },
  { id: 2, name: 'Skinny Fit Jeans', image: '/Frame 33.png', price: 240, oldPrice: 260, discount: 20, rating: 3.5 },
  { id: 3, name: 'Checkered Shirt', image: '/Frame 34.png', price: 180, rating: 4.5 },
  { id: 4, name: 'Sleeve Striped T-Shirt', image: '/Frame 38.png', price: 130, oldPrice: 160, discount: 30, rating: 4.5 },
  { id: 5, name: 'Vertical Striped Shirt', image: '/vss.png', price: 212, oldPrice: 232, discount: 20, rating: 5 },
  { id: 6, name: 'Courage Graphic T-Shirt', image: '/cgts.png', price: 145, rating: 4 },
  { id: 7, name: 'Loose Fit Bermuda Shorts', image: '/loose fit.png', price: 80, rating: 3 },
  { id: 8, name: 'Faded Skinny Jeans', image: '/Faded skinny.png', price: 210, rating: 4.5 },
  { id: 9, name: 'Gradient Graphic T-Shirt', image: '/gradient.png', price: 145, rating: 4 },
  { id: 10, name: 'Polo with Tipping Details', image: '/pwot.png', price: 180, rating: 4.5 },
  { id: 11, name: 'Black Striped T-Shirt', image: '/black.png', price: 120, oldPrice: 150, discount: 30, rating: 5 },
  // Добавь свои изображения в public/ если нужно больше товаров
];

const Shop = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">ALL PRODUCTS</h1>
      <div className="flex justify-between items-center mb-8">
        <p className="text-gray-600">Showing {allProducts.length} products</p>
        <select className="border rounded-lg px-4 py-2 focus:outline-none">
          <option>Sort by: Most Popular</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {allProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Shop;