import React, { useContext } from 'react'
import "./Product.css"
import { ShopContext } from './Context/ShopContext'


export const Product = (props) => {
    const {id, productName, price, productImage} = props.data
    const {addToCart, cartItems} = useContext(ShopContext)

    const cartItemAmount = cartItems[id]
    

    return <div className='product'>
        <img className="image" src ={productImage}/> 
        <div className='info'>
            <p>
                <b> {productName}</b>
                <b> ${price}</b>
            </p>
        </div>
        <button className='addToCartBttn' onClick={() => addToCart(id)}>
            Add to Cart
            {cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </button>
    </div>
}

