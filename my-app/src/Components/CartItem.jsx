import React from "react";
import "./CartItem.css";
import { useShopContext} from "./Context/ShopContext";

// id: 3,
// productName: "Mousepad Three",
// price: 40.0,
// productImage: KOI,

export default function CartItem(props) {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartQuantity} = useShopContext();
  const quantity = cartItems[id];

  return (
    <div className="container cartItemContainer">
      <div className="cartImageContainer">
        <img src={productImage} alt="mousepad image" />
      </div>
      <div className="cartDescriptionContainer">
        <h1>{productName}</h1>
        <h2>${price}</h2>
        <div className="cartQuantity">
          <h2>Quantity: {quantity}</h2>
          <button onClick={()=>removeFromCart(id)} >-</button>
          <input onChange={(e)=>updateCartQuantity(Number(e.target.value),id)} value={quantity} type="number"/>
          <button onClick={()=>addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
}
