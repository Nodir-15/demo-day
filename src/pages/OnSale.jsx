import React from 'react';
import ProductCard from '../components/ProductCard';

// Товары со скидками (берём те, у которых есть oldPrice и discount)
const saleProducts = [
  { id: 2, name: 'Skinny Fit Jeans', image: '/Frame 33.png', price: 240, oldPrice: 260, discount: 20, rating: 3.5 },
  { id: 4, name: 'Sleeve Striped T-Shirt', image: '/Frame 38.png', price: 130, oldPrice: 160, discount: 30, rating: 4.5 },
  { id: 5, name: 'Vertical Striped Shirt', image: '/vss.png', price: 212, oldPrice: 232, discount: 20, rating: 5 },
  { id: 11, name: 'Black Striped T-Shirt', image: '/black.png', price: 120, oldPrice: 150, discount: 30, rating: 5 },
  // Добавь больше, если есть другие товары со скидкой
  { id: 12, name: 'Nike Air Force 1 White/Red', image: '/nike.jpg', price: 89, oldPrice: 120, discount: 26, rating: 4.8 },
  { id: 13, name: 'Nike Dunk Low University Red', image: '/nike2.webp', price: 110, oldPrice: 150, discount: 27, rating: 4.9 },
  { id: 14, name: 'Adidas Gazelle Classic', image: '/adidas.webp', price: 75, oldPrice: 100, discount: 25, rating: 4.7 },
  { id: 15, name: 'Puma Deviate Nitro Elite', image: '/adidas2.webp', price: 180, oldPrice: 250, discount: 28, rating: 4.6 },

];

const OnSale = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-red-600">ON SALE</h1>
      <p className="text-xl text-gray-700 mb-8">Grab the best deals before they're gone!</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {saleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {saleProducts.length === 0 && (
        <p className="text-center text-gray-500 text-xl mt-12">No sales right now. Check back soon!</p>
      )}
    </main>
  );
};

export default OnSale;