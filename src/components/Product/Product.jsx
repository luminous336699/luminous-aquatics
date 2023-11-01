import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name,img,price,type,position,co2,temperature,placement,shade} = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>Name: {name}</p>
                <p>Price: Per Stem {price} Tk</p>
                <p>Type: {type}</p>
                <p>Position: {placement} {position} </p>
                <p>Temperature: {temperature} </p>
                <p>CO2 Requirement: {co2} </p>
                

            </div>
            <button className='btn-cart'>Add to cart  <FontAwesomeIcon icon={faShoppingCart}/> </button>
            {/* <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to cart  <FontAwesomeIcon icon={faShoppingCart}/> </button> */}
        </div>
    );
};

export default Product;