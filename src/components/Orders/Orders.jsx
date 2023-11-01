import React from 'react';
import Header from '../header/Header';
import Cart from '../Cart/Cart';

const Orders = () => {
    return (
        <div className='shop-container'>
             <div className='products-container'>

             </div>
             <div className='cart-container'>
                <Cart cart={[]}></Cart>
             </div>
        </div>
    );
};

export default Orders;