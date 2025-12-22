// components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="relative overflow-hidden rounded-lg">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
        {product.discount && (
          <span className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded-full text-sm">{product.discount}%</span>
        )}
      </div>
      <h3 className="mt-2 font-semibold group-hover:text-gray-600 transition">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.brand}</p>
      <div className="flex items-center space-x-2">
        <span className="font-bold">${product.price}</span>
        {product.oldPrice && <span className="line-through text-gray-500">${product.oldPrice}</span>}
      </div>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
        ))}
      </div>
    </Link>
  );
};

export default ProductCard;