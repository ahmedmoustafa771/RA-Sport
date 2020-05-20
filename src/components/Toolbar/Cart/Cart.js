import React from 'react';
import './Cart.scss';
import { FiShoppingCart } from 'react-icons/fi';

const cart = props => {
    return (
        <div className="cart">
            <FiShoppingCart className="cart__icon" />
            <div className="cart__circle" >1</div>
        </div>
    );
};
export default cart;