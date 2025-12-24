import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Загружаем из localStorage при запуске
  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) setCart(JSON.parse(saved));
  }, []);

  // Сохраняем при каждом изменении
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

 const addToCart = (item) => {
  setCart(current => {
    const existing = current.find(cartItem => cartItem.id === item.id && cartItem.size === item.size);
    if (existing) {
      return current.map(cartItem => 
        cartItem.id === item.id && cartItem.size === item.size 
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem
      );
    }
    return [...current, item];
  });
};

  const removeFromCart = (id, size) => {
    setCart(current => current.filter(item => !(item.id === id && item.size === size)));
  };

  const updateQuantity = (id, size, quantity) => {
    if (quantity < 1) return;
    setCart(current => current.map(item => 
      item.id === id && item.size === size ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};