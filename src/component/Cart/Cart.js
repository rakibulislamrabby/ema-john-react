import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    let Total = 0;
    let shipping = 0;
    for (const product of cart) {
        Total = Total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = (Total * 10) / 100;
    const grandTotal = Total + shipping + tax;
    return (
        <div className='cart'>
            <h1 className='order-summary'>Order Summary</h1>
            <p>Selected Cart: ${cart.length}</p>
            <p>Total Price: ${Total}</p>
            <p>Total shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p><b>Grand Total: ${grandTotal}</b></p>
        </div>
    );
};

export default Cart;