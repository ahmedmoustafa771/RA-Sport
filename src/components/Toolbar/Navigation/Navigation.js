import React from 'react';
import './Navigation.scss';

const navigation = props => {
    let navClass= "nav";
    if (props.class) {
        navClass = "sideNav";
    }
    return (
        <ul className={navClass}>
            <li ><a className="nav__Item" href="/">Brands</a></li>
            <li ><a className="nav__Item" href="/">About Ra</a></li>
            <li ><a className="nav__Item" href="/">Stores</a></li>
            <li ><a className="nav__Item" href="/">How it work</a></li>
            <li ><a className="nav__Item" href="/">Ra News</a></li>
            <li ><a className="nav__Item" href="/">Contact us</a></li>
            <li ><a className="nav__Item" href="/">Join us</a></li>
        </ul>
    );
};

export default navigation;