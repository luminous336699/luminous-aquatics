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
                <a href="shop">shop</a>
                <a href="order">order</a>
                <a href="inventory">inventory</a>
                <a href="login">login</a>
            </div>
        </div>
    );
};

export default Header;