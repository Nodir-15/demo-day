// pages/ProductDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext.jsx';

// Hardcoded for example, in real app fetch by id
const product = {
  id: 6,
  name: 'ONE LIFE GRAPHIC T-SHIRT',
  price: 260,
  oldPrice: 350,
  discount: 30,
  images: ['/olgt.png', '/olgt2.png', '/olgt3.png', '/olgt4.png',],
  colors: ['green', 'black', 'blue', 'red'],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
  reviews: [
    { name: 'Sarah M.', review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”", rating: 5, date: 'August 14, 2023' },
    { name: 'Alex K.', review: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.', rating: 5, date: 'August 14, 2023' },
    { name: 'Ethan R.', review: 'This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the quality of the print is top-notch.', rating: 5, date: 'August 13, 2023' },
    { name: 'Olivia P.', review: '$150 item, typically reliable and long-lasting. This t-shirt from an alternative brand exceeded my expectations.', rating: 5, date: 'August 12, 2023' },
    { name: 'Liam N.', review: 'Love the design of this t-shirt! The intricate details and unique graphic make it stand out.', rating: 5, date: 'August 11, 2023' },
    { name: 'Ava H.', review: 'This t-shirt is a masterpiece of design. The attention to detail and creative artwork make it a standout piece in my collection.', rating: 5, date: 'August 10, 2023' },
  ],
  similar: [
    { id: 9, name: 'Polo with Contrast Trims', image: '/pwot.png', price: 212, oldPrice: 242, discount: 20 },
    { id: 10, name: 'Gradient Graphic T-Shirt', image: '/gradient.png', price: 145 },
    { id: 11, name: 'Polo with Tipping Details', image: '/Frame 38.png', price: 180 },
    { id: 12, name: 'Black Striped T-Shirt', image: '/black.png', price: 120, oldPrice: 150, discount: 30 },
  ]
};

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState('M'); // размер по умолчанию M
  const [quantity, setQuantity] = useState(1);           // количество по умолчанию 1
  // In real app, use id to fetch
  
 <button
  onClick={() => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],  // главное фото
      oldPrice: product.oldPrice,
      discount: product.discount
    }, quantity, selectedSize);
    alert('Товар добавлен в корзину! ✅');
  }}
  className="bg-black text-white rounded-full px-12 py-4 w-full font-semibold hover:bg-gray-800 transition text-lg"
>
  Add to Cart
</button>

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <img src={product.images[0]} alt={product.name} className="w-full h-96 object-cover rounded-lg" />
          <div className="flex space-x-4">
            {product.images.slice(1).map((img, i) => (
              <img key={i} src={img} alt={`Thumb ${i}`} className="w-24 h-24 object-cover rounded-lg hover:border-2 border-black transition" />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center space-x-2 mt-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400">★</span>
            ))}
            <span className="text-gray-600">(150 Reviews)</span>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <span className="text-2xl font-bold">${product.price}</span>
            <span className="line-through text-gray-500">${product.oldPrice}</span>
            <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full">-{product.discount}%</span>
          </div>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <hr className="my-6" />
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Select Color:</h3>
           <div className="flex space-x-4">
  {product.colors.map((color, index) => (
    <div
      key={index}
      className={`w-10 h-10 rounded-full bg-${color}-500 border-2 border-black hover:border-4 hover:scale-110 transition-all duration-200 cursor-pointer`}
    ></div>
  ))}
</div>
          </div>
                    <div className="mb-6">
            <h3 className="font-semibold mb-3">Choose Size:</h3>
            <div className="flex space-x-4">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-medium transition-all duration-200
                    ${selectedSize === size 
                      ? 'bg-black text-white border-black shadow-lg' 
                      : 'bg-white text-black border-gray-300 hover:border-black'
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-8">
  <button
    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
    className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-xl hover:bg-gray-100 transition"
  >
    -
  </button>
  <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
  <button
    onClick={() => setQuantity(quantity + 1)}
    className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-xl hover:bg-gray-100 transition"
  >
    +
  </button>
</div>
  
          <button
  onClick={() => alert(`Добавлено в корзину: ${quantity} шт. размера ${selectedSize}`)}
  className="bg-black text-white rounded-full px-12 py-4 w-full font-semibold hover:bg-gray-800 transition text-lg"
>
  Add to Cart
</button>
        </div>
      </div>

      {/* Reviews */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Rating & Reviews</h2>
        <div className="flex space-x-4 mb-4">
          <button className="hover:underline">All Reviews (451)</button>
          <button className="hover:underline">Latest</button>
          <button className="hover:underline">Write a Review</button>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {product.reviews.map((review, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-2">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className={j < review.rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                ))}
              </div>
              <h3 className="font-semibold">{review.name}</h3>
              <p className="text-gray-600 mt-2">{review.review}</p>
              <p className="text-sm text-gray-400 mt-2">Posted {review.date}</p>
            </div>
          ))}
        </div>
        <button className="mt-4 hover:underline">View More Reviews</button>
      </section>

      {/* Similar Products */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-center mb-8">YOU MIGHT ALSO LIKE</h2>
        <div className="grid grid-cols-4 gap-6">
          {product.similar.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;