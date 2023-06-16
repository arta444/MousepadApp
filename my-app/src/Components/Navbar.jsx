import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import {ShoppingCart} from "phosphor-react"
import {useShopContext} from "./Context/ShopContext"


export default function Navbar () {
  const {cartItems} = useShopContext();
  let totalItems =0;

  for (let key in cartItems){
    totalItems+=cartItems[key];
  }

  return (
    <div className="container navbar">
        <Link to="/home"className='navLink' >Home</Link>
        
        <Link to="/cart" className='navLink cartsvg' >
          <div className='amount'>{totalItems}
             </div>
          <ShoppingCart size={40}/>
        </Link>
        
    </div>
  )
}

