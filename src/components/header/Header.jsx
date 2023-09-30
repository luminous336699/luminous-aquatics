import React from 'react';
import './Header.css';
import icon from '../../images/icon_aromatica.jpg'

const Header = () => {
    return (
        <div className='header'>
            <div className='image-container'>
                <img src={icon} alt="" />
                <p>Luminous Aquatics</p>
            </div>
            <div className='header-item'>
                <a href="shop">Shop</a>
                <a href="order">Order</a>
                <a href="inventory">Inventory</a>
                <a href="login">Login</a>
            </div>
        </div>
    );
};

export default Header;