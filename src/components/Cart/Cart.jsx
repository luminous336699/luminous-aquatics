import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // const {cart} = props;
    // const cart = props.cart;
    let total = 0;
    for (const product of cart){
        if(product){
            total = total + product.price;
        }
        console.log(cart);
    }
    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <div>
                <p>Item added: {cart.length}</p>
                {/* <p>Total Price: {total.toFixed(2)}</p> */}
                <p>Total Price: {total}</p>
                <p>Delivery Charge: </p>
                <p>Discount: </p>
                <p>Grand Total: </p>
            </div>
        </div>
    );
};

export default Cart;