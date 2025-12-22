import React from 'react';
import ProductCard from '../components/ProductCard';

// Новинки, разделённые по категориям
const shoes = [
  { id: 31, name: 'Nike Air Force 1', image: '/naf1.jpg', price: 120, rating: 4.9 },
  { id: 32, name: 'Adidas Stan Smith', image: '/ass.jpg', price: 95, rating: 4.8 },
  { id: 33, name: 'Puma RS-X', image: '/prsx.jpg', price: 130, rating: 4.7 },
  { id: 34, name: 'Nike Blazer Mid', image: '/nbm.jpg', price: 110, rating: 4.9 },
];

const clothingRow2 = [
  { id: 35, name: 'Gradient Graphic T-Shirt', image: '/gradient.png', price: 145, rating: 4.5 },
  { id: 36, name: 'Polo with Tipping Details', image: '/Frame 32.png', price: 180, rating: 4.5 },
  { id: 37, name: 'Black Striped T-Shirt', image: '/black.png', price: 120, rating: 5 },
  { id: 38, name: 'ONE LIFE GRAPHIC T-SHIRT', image: '/olgt.png', price: 180, rating: 4.5 },
];

const clothingRow3 = [
  { id: 39, name: 'Sleeve Striped T-Shirt', image: '/Frame 38.png', price: 130, rating: 4.5 },
  { id: 40, name: 'Vertical Striped Shirt', image: '/vss.png', price: 212, rating: 5 },
  { id: 41, name: 'Courage Graphic T-Shirt', image: '/cgts.png', price: 145, rating: 4 },
  { id: 42, name: 'Skinny Fit Jeans', image: '/Frame 33.png', price: 240, rating: 4 },
];

const hoodies = [
  { id: 43, name: 'Oversized Black Hoodie', image: '/obh.jpg', price: 220, rating: 4.8 },
  { id: 44, name: 'White Classic Hoodie', image: '/cwh.jpg', price: 180, rating: 4.7 },
  { id: 45, name: 'Olive Green Sweatshirt', image: '/ogss.jpg', price: 200, rating: 4.6 },
  { id: 46, name: 'Grey Zip Hoodie', image: '/gzhh.jpg', price: 250, rating: 4.9 },
];

const NewArrivals = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">NEW ARRIVALS</h1>
      <p className="text-xl text-gray-700 mb-12">Check out the latest drops — fresh styles just landed!</p>

      {/* Строка 1: Обувь */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Fresh Sneakers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {shoes.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      {/* Строка 2: Одежда */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">New Tops & Shirts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clothingRow2.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      {/* Строка 3: Ещё одежда */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">More Casual Wear</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clothingRow3.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      {/* Строка 4: Худи и толстовки */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Cozy Hoodies & Sweatshirts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {hoodies.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </main>
  );
};

export default NewArrivals;