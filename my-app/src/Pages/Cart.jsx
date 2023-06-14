import React from 'react';
import productsList from '../productsList';
import { Product } from '../Components/Product';


export default function Cart() {
  return (
   <div>
      <h1>Cart Page</h1>
      <div className="products">
        {productsList.map((product, index)=>
        (<Product key={index} data={product}/>
        ))} 
      </div>
    </div>
  )
};

