import React from 'react';
import './Header.css';
import icon from '../../images/ProductImage/icon_aromatica.jpg'
// import icon from '../public/images/icon_aromatica.jpg'
// import icon from '../../images/icon_aromatica'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='lg:h-20 header rounded p-5 md:flex md:items-center md:justify-between'>
            <div className='image-container '>
                <img className='h-16 inline mx-4 rounded-md' src={icon} alt="" />
                <p>Luminous Aquatics</p>
            </div>
            <div className='header-item'>



                {/*  Temporary deployment code */}

                <ul className='md:flex md:items-center text-white'>
                    <li className='mx-4 my-6 md:my-0'><Link to="">Home</Link></li>
                    <li className='mx-4 my-6 md:my-0'><Link to="">Shop</Link></li>
                    <li className='mx-4 my-6 md:my-0'><Link to="">Order</Link></li>
                    <li className='mx-4 my-6 md:my-0'><Link to="">Inventory</Link></li>
                    <li className='mx-4 my-6 md:my-0'><Link to="">Login</Link></li>
                </ul>


                {/* working code */}
                {/* <Link to="">Home</Link>
                <Link to="shop">Shop</Link>
                <Link to="orders">Order</Link>
                <Link to="inventory">Inventory</Link>
                <Link to="login">Login</Link>  */}
            </div>
        </div>
    );
};

export default Header;


