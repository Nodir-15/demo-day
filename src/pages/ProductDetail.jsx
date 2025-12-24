import React, { useState } from 'react';

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);

  // Пример продукта (твой ONE LIFE GRAPHIC T-SHIRT)
  const product = {
    id: 1,
    name: 'ONE LIFE GRAPHIC T-SHIRT',
    price: 260,
    oldPrice: 350,
    discount: 30,
    images: ['/olgt.png'],  // положи своё фото в public/
    description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    colors: ['green', 'white', 'blue', 'red'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  };

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      oldPrice: product.oldPrice,
      discount: product.discount,
      image: product.images[0],
      size: selectedSize,
      quantity: quantity
    };

    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    const existing = cart.find(i => i.id === item.id && i.size === item.size);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    // Показываем красивое уведомление
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);  // исчезает через 3 секунды
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Фото */}
        <div>
          <img src={product.images[0]} alt={product.name} className="w-full rounded-2xl shadow-xl object-cover" />
        </div>

        {/* Информация */}
        <div>
          <h1 className="text-4xl font-bold mb-6">{product.name}</h1>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl font-bold">${product.price}</span>
            {product.oldPrice && <span className="text-2xl line-through text-gray-500">${product.oldPrice}</span>}
            {product.discount && <span className="bg-red-600 text-white px-4 py-2 rounded-full font-bold">-{product.discount}%</span>}
          </div>

          <p className="text-lg text-gray-700 mb-10">{product.description}</p>

          {/* Цвета */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Select Color:</h3>
            <div className="flex gap-4">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 rounded-full bg-${color}-500 border-2 border-black hover:border-4 hover:scale-110 transition-all duration-200 cursor-pointer`}
                ></div>
              ))}
            </div>
          </div>

          {/* Размеры */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Choose Size:</h3>
            <div className="flex gap-4">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-14 h-14 rounded-full border-2 flex items-center justify-center text-lg font-medium transition-all
                    ${selectedSize === size ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300 hover:border-black'}
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Количество */}
          <div className="flex items-center gap-6 mb-12">
            <h3 className="text-xl font-semibold">Количество:</h3>
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-2xl font-bold hover:bg-gray-100 transition"
            >
              -
            </button>
            <span className="text-3xl font-bold w-20 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-2xl font-bold hover:bg-gray-100 transition"
            >
              +
            </button>
          </div>

          {/* Кнопка Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-6 rounded-full text-2xl font-semibold hover:bg-gray-800 transition shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Красивое уведомление в углу */}
            {/* Красивое уведомление с выездом снизу */}
      <div className={`fixed right-8 bottom-8 z-50 transition-all duration-500 ease-in-out ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <div className="bg-black text-white px-8 py-6 rounded-2xl shadow-2xl flex items-center gap-4">
          <span className="text-5xl">✅</span>
          <div>
            <p className="text-xl font-bold">Добавлено в корзину!</p>
            <p className="text-lg opacity-90">
              {quantity} × {product.name} (размер {selectedSize})
            </p>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="ml-6 text-3xl hover:text-gray-300 transition"
          >
            ×
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;