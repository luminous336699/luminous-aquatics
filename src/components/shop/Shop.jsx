import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';



const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const [cart, setCart] = useState([])

    
useEffect(() => {
    // get cart from loacl storage
    const storedCart = getShoppingCart();
    const savedCart = [];

    // get id of the product from the loacl storage
    for(const id in storedCart){
        // get product by id
        const addedProduct = products.find(product => product.id)

        if(addedProduct){
            // add quantity
              const quantity = storedCart[id];
              addedProduct.quantity = quantity;  
        }
        // console.log('added product' , addedProduct)
        savedCart.push(addedProduct);
    }

    setCart(savedCart);
}, [products])
    

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }

    return (

        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;





// useEffect(() => {
//     const storedCart = getShoppingCart();
//     // get product id
//     for(const id in storedCart){

//         // get product by id
//         const addedProduct = products.find(product => product.id === id);
        
//         // get product quantity
//         const quantity = storedCart[id];

//         if (addedProduct) {
//             addedProduct.quantity = quantity;
//             console.log(addedProduct);
//         }

//         // addedProduct.quantity = quantity
//         // console.log(addedProduct);
//     }
// }, [products])