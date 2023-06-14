import React from 'react'


export const Product = (props) => {
    const {id, productName, price, productImage} = props.data
    return <div className='product'>
        <img scr = {productImage}/> 
        <div className='info'>
            <p>
                <b> {productName}</b>
                <b> {price}</b>
            </p>
        </div>
    </div>
}
