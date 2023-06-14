import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="container navbar">
        <Link to="/home"className='navLink' >Home</Link>
        <Link to="/cart" className='navLink' >Cart</Link>
    </div>
  )
}

