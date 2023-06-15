import React, { useContext } from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import {ShoppingCart} from "phosphor-react"
import { ShopContext } from './Context/ShopContext'



export default function Navbar (props) {

  const {id, productName, price, productImage} = props.data
  const {addToCart, cartItems} = useContext(ShopContext)

  const cartItemAmount = cartItems[id]

  return (
    <div className="container navbar">
        <Link to="/home"className='navLink' >Home</Link>
        
        <Link to="/cart" className='navLink cartsvg' >
          <div className='amount'>({cartItemAmount })
             </div>
          <ShoppingCart size={40}/>
        </Link>
        
    </div>
  )
}

