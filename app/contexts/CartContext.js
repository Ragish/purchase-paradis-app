"use client";

import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [cartItemCount, setCartItemCount] = useState(0);

  const addToCart = (product, quantity = 1, productId) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === productId
    );

    let updatedCart;

    if (existingProductIndex >= 0) {
      updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
    } else {
      const newProduct = {
        ...product,
        id: productId,
        quantity: quantity,
      };

      updatedCart = [...cart, newProduct];
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: quantity,
      }));
    }

    setCart(updatedCart);

    // Update the cart item count
    setCartItemCount(updatedCart.length);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);

    // Update the cart item count
    setCartItemCount(updatedCart.length);
  };

  const incrementQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) + 1,
    }));
  };

  const decrementQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(1, (prevQuantities[productId] || 1) - 1),
    }));
  };

  const clearShoppingCart = () => {
    setCart([]);
    setCartItemCount(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        quantities,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        clearShoppingCart,
        cartItemCount, // Add cartItemCount here
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
