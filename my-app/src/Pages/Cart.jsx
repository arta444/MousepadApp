import React from 'react';
import { PRODUCTS } from '../products';
import { Productt } from './Product';

export default function Cart() {
  return (
   <div>
      <h1>Cart Page</h1>
      <div className="products">
        {PRODUCTS.map((product)=>
        (<Product data={product}/>
        ))} 
      </div>
    </div>
  )
};

