import React from 'react';
import './Footer.scss';

import paymentImg from '../../assets/Footer/paymentMethods.png';
import Logo from '../../assets/Logo.png';
import Sponsors from './Sponsors/Sponsors';

const footer = props => {
    return (
        <div className="footer">
            <h2>subscribe to ra sport newsletter</h2>
            <form>
                <input placeholder="Your E-mail address" type="email" />
                <input type="submit" value="Sign up"/>
            </form>
            <h3>Choose your favourite brand</h3>
            <p>RaSport company for import & export SAE, is a leading Egyptian retail company, franchising 
            and managing some of the best international brands, making them grow in the region.
            </p>
            <Sponsors />
            <h3>Payment Method</h3>
            <img src={paymentImg} alt="payment methods" className="payment--img" />
            <img src={Logo} alt="logo" className="logo--img" />
            <h4>Copyright &copy; 2020 RA SPORT. All rights reserved</h4>
        </div>
    );
};

export default footer;