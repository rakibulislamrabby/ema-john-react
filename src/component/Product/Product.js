import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './product.css'

const Product = ({ product, handleAddToCart }) => {
    //Destructuring HandleAddToCart
    // const { product, handleAddToCart } = props;
    // const { name, img, seller, price, ratings } = props.product;
    const { name, img, seller, price, ratings } = product;

    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Ratting: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='button-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;