import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, price, category, seller } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>Name: {name}</p>
                <p>Price: Per Stem {price} Tk</p>
                <p>Type: {category}</p>
                <p>Position: {seller}</p>
            </div>
            <button className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;