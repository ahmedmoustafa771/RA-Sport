import React from 'react';
import './Sidedrawer.scss';

import Backdrop from '../../../../UI/Backdrop/Backdrop';
import LogoImg from '../../../../assets/Logo.png';
import Navigation from '../Navigation';


const sidedrawer = (props) => {
    let attachedClasses = ["Sidedrawer", "Close"];
    if (props.open) {
        attachedClasses = ["Sidedrawer", "Open"];
    }
    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
            <img src={LogoImg} alt="raya-logo" className="sidedrawer__logo" />
            <Navigation class={props.open}/>
            </div>
        </React.Fragment>

    );
};

export default sidedrawer;