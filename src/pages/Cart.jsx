import React, { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const [email, setEmail] = useState('');
  const [showCheckout, setShowCheckout] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleCheckout = () => {
    if (!email || !email.includes('@')) {
      alert('Введите корректный email!');
      return;
    }
    setShowCheckout(false);
    setShowThankYou(true);
    clearCart(); // Очищаем корзину после покупки
  };

  if (cart.length === 0) {
    return (
      <main className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-8">Your Cart is Empty</h1>
        <p className="text-xl text-gray-600 mb-12">Добавьте товары, чтобы увидеть их здесь</p>
        {/* Красивые иллюстрации пустой корзины */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <img src="https://www.shutterstock.com/image-vector/empty-cart-illustration-concept-on-260nw-2491462049.jpg" alt="Empty cart" className="rounded-lg shadow-lg" />
          <img src="https://www.shutterstock.com/image-vector/empty-shopping-cart-illustration-concept-260nw-2242903143.jpg" alt="Empty cart" className="rounded-lg shadow-lg" />
          <img src="https://cdn.dribbble.com/userupload/21875388/file/original-910769fbdef94e164ed36b20cd72af19.png?format=webp&resize=400x300&vertical=center" alt="Empty cart" className="rounded-lg shadow-lg" />
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cart.map(item => (
            <div key={`${item.id}-${item.selectedSize}`} className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-md">
              <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-lg" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">Size: {item.selectedSize}</p>
                <p className="text-lg font-bold mt-2">${item.price}</p>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)} className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-gray-100">-</button>
                <span className="text-xl font-bold w-12 text-center">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)} className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-gray-100">+</button>
              </div>
              <button onClick={() => removeFromCart(item.id, item.selectedSize)} className="text-red-600 text-2xl hover:text-red-800">×</button>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-xl shadow-md h-fit">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          <div className="text-xl mb-6">Total: <span className="font-bold">${totalPrice.toFixed(2)}</span></div>
          <button
            onClick={() => setShowCheckout(true)}
            className="w-full bg-black text-white rounded-full py-4 font-semibold hover:bg-gray-800 transition text-lg"
          >
            Go to Checkout
          </button>
        </div>
      </div>

      {/* Модальное окно ввода email */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6">Enter your email</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full border-2 border-gray-300 rounded-full px-6 py-4 mb-6 focus:outline-none focus:border-black"
            />
            <div className="flex gap-4">
              <button onClick={() => setShowCheckout(false)} className="flex-1 py-4 border-2 border-gray-300 rounded-full hover:bg-gray-100">Cancel</button>
              <button onClick={handleCheckout} className="flex-1 py-4 bg-black text-white rounded-full hover:bg-gray-800">Confirm Order</button>
            </div>
          </div>
        </div>
      )}

      {/* Всплывающее окно Спасибо */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-12 rounded-3xl text-center max-w-lg">
            <h2 className="text-4xl font-bold mb-8">Спасибо за покупку!</h2>
            <p className="text-xl text-gray-700 mb-8">Мы отправили подтверждение на {email}</p>
            <div className="grid grid-cols-3 gap-6 mb-12">
              <img src="https://thumbs.dreamstime.com/b/shopping-cart-checkmark-successful-purchase-vector-design-generative-ai-functional-icon-indicating-order-411017287.jpg" alt="Thank you" className="rounded-xl shadow-lg" />
              <img src="https://media.istockphoto.com/id/862205352/vector/shop%D1%81art-banner-copy.jpg?s=612x612&w=0&k=20&c=206dIvxS0s2WrYrt0pyYwpaYmj-pEjkb6RzuVs2cucs=" alt="Thank you" className="rounded-xl shadow-lg" />
              <img src="https://media.istockphoto.com/id/1395883911/vector/congrats-class-of-2025-simple-hand-drawn-lettering-vector-text-illustration-template.jpg?s=612x612&w=0&k=20&c=mEv2KeT_0k3Nc1fGrCub4eoDA7t4eNN-WohtDqXaUKA=" alt="Thank you" className="rounded-xl shadow-lg" />
            </div>
            <button onClick={() => setShowThankYou(false)} className="bg-black text-white rounded-full px-12 py-4 text-lg hover:bg-gray-800">Close</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;