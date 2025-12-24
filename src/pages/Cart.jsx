import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Загружаем корзину из localStorage при открытии страницы
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Обновляем количество
  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    const newCart = [...cart];
    newCart[index].quantity = newQuantity;
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  // Удаляем товар
  const removeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  // Считаем общую сумму
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Если корзина пуста
  if (cart.length === 0) {
    return (
      <main className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-8">Ваша корзина пуста</h1>
        <p className="text-2xl text-gray-600 mb-12">Добавьте товары из каталога</p>
        <button 
          onClick={() => window.location.href = '/shop'}
          className="bg-black text-white px-12 py-6 rounded-full text-2xl font-semibold hover:bg-gray-800 transition"
        >
          Перейти в магазин
        </button>
      </main>
    );
  }

  // Корзина с товарами
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-12 text-center">Ваша корзина</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Список товаров */}
        <div className="lg:col-span-2 space-y-8">
          {cart.map((item, index) => (
            <div key={index} className="flex items-center gap-8 bg-white p-8 rounded-2xl shadow-xl">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-40 h-40 object-cover rounded-xl"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                <p className="text-xl text-gray-600 mb-2">Размер: <span className="font-bold">{item.size}</span></p>
                <p className="text-2xl font-bold">${item.price}</p>
              </div>

              <div className="flex items-center gap-6">
                <button 
                  onClick={() => updateQuantity(index, item.quantity - 1)}
                  className="w-14 h-14 rounded-full border-4 border-black flex items-center justify-center text-3xl font-bold hover:bg-gray-100 transition"
                >
                  -
                </button>
                <span className="text-3xl font-bold w-20 text-center">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(index, item.quantity + 1)}
                  className="w-14 h-14 rounded-full border-4 border-black flex items-center justify-center text-3xl font-bold hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>

              <button 
                onClick={() => removeItem(index)}
                className="text-red-600 text-4xl hover:text-red-800 transition ml-8"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        {/* Итоговая сумма */}
        <div className="bg-gray-50 p-10 rounded-2xl shadow-xl h-fit">
          <h2 className="text-3xl font-bold mb-8">Итого</h2>
          <p className="text-5xl font-bold mb-12">${totalPrice.toFixed(2)}</p>
          <button className="w-full bg-black text-white py-6 rounded-full text-2xl font-semibold hover:bg-gray-800 transition">
            Оформить заказ
          </button>
        </div>
      </div>
    </main>
  );
};

export default Cart;