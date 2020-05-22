import React from 'react';
import './HowItWork.scss';

import { AiOutlineDesktop } from "react-icons/ai";
import { FiShoppingCart } from 'react-icons/fi';
import { MdPayment } from "react-icons/md";


const howItWork = props => (
    <div className="how">
        <div className="how__header">
            <h2>how it work?</h2>
            <p>Browse our sites now and buy what you want in a shared basket</p>
        </div>
        <div className="how__steps">
            <div className="how__steps--card">
                <AiOutlineDesktop className="how__steps--card-i" />
                <h4>step.1</h4>
                <h3>open any brand website</h3>
            </div>
            <div className="how__steps--card">
                <FiShoppingCart className="how__steps--card-i" />
                <h4>step.2</h4>
                <h3>add products to your cart</h3>
            </div>
            <div className="how__steps--card">
                <MdPayment  className="how__steps--card-i"/>
                <h4>step.3</h4>
                <h3>pay and get your products</h3>
            </div>
        </div>
    </div>
);

export default howItWork;