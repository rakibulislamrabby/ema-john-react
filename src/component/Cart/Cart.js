import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    return (
        <div>
            <h1 className='order-summary'>Order Summary</h1>
            <p>Selected Cart:{cart.length}</p>
        </div>
    );
};

export default Cart;