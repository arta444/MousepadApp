import React from 'react'
import "./Product.css"

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data
    return <div className='product'>
        <img className="image" src ={productImage}/> 
        <div className='info'>
            <p>
                <b> {productName}</b>
                <b> ${price}</b>
            </p>
        </div>
        <button className='addToCartBttn'>Add to Cart</button>
    </div>
}
