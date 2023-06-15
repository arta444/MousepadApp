import React, { useContext } from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import {ShoppingCart} from "phosphor-react"
import {ShopContext} from "./Context/ShopContext";





export default function Navbar () {
  const {cartItems} = useContext(ShopContext)
  let totalItems =0;

  for (let key in cartItems){
    totalItems+=cartItems[key];
  }

  console.log(cartItems)

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

