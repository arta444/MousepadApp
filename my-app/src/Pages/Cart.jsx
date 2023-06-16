import React from "react";
import productsList from "../productsList";
import { Product } from "../Components/Product";
import { useShopContext } from "../Components/Context/ShopContext";
import CartItem from "../Components/CartItem";
import "./Cart.css"

export default function Cart() {
  const {cartItems, getCartSubtotal} = useShopContext();
  const subtotal = getCartSubtotal();

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <div className="cartItems">
        {productsList.map((product, index) => {
          if (cartItems[index+1] > 0) {
            return <CartItem key={index} data={product}/>
          }
          return null;
        })}
      </div>
      <div className="checkout">
        <p>Subtotal: ${subtotal}</p>
        <button>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  );
}
