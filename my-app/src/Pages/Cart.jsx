import React from "react";
import productsList from "../productsList";
import { Product } from "../Components/Product";
import { useShopContext } from "../Components/Context/ShopContext";
import CartItem from "../Components/CartItem";
import "./Cart.css";
import { useNavigate } from "react-router";

export default function Cart() {
  const { cartItems, getCartSubtotal } = useShopContext();
  const subtotal = getCartSubtotal();
  const navigate = useNavigate();

  return (
    <div className="cart">
      {subtotal>0 &&<h1>Shopping Cart</h1>}
      <div className="cartItems">
        {productsList.map((product, index) => {
          if (cartItems[index + 1] > 0) {
            return <CartItem key={index} data={product} />;
          }
          return null;
        })}
      </div>
      {subtotal > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${subtotal}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Shopping Cart Is Empty</h1>
      )}
    </div>
  );
}
