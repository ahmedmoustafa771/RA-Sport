import React, { useState } from 'react';
import './Toolbar.scss';

import LogoImg from '../../assets/Logo.png';
import Cart from './Cart/Cart';
import Navigation from './Navigation/Navigation';
import DrawerToggle from './Navigation/DrawerToggle/DrawerToggle';
import Sidedrawer from './Navigation/Sidedrawer/Sidedrawer';

const toolbar = props => {
    const [show, setShow] = useState(false);

    const openDrawer = () => {
        setShow(true);
    };
    const closeDrawer = () => {
        setShow(false);
    };

    return (
            <div className='toolbar'>
                <DrawerToggle clicked={openDrawer}/>
                <Sidedrawer open={show} closed={closeDrawer} />
                <img src={LogoImg} alt="raya-logo" className="toolbar__logo" />
                <Cart />
                <Navigation />
                <button className="toolbar__btn">Login</button>
            </div>

    );
};

export default toolbar;