import React, { createContext, useContext, useEffect, useState } from 'react'
import productsList from '../../productsList';

export const ShopContext = createContext(null);

//sets the amount of all items to zero 
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < productsList.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

//customn react hook to get ShopContext outside of this file 
export function useShopContext (){
  return useContext(ShopContext)
}

export const ShopContextProvider = (props) => {
  //creates cartItems state, initializes it with all zeros 
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  
  const contextValue = {cartItems, addToCart, removeFromCart}
  
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>)
}

