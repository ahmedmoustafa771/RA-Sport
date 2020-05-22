import React from 'react';
import './Introduction.scss';

import img1 from '../../assets/Introduction/Intro 1.png';
import img2 from '../../assets/Introduction/Intro 2.png';

const introduction = props => (
    <div className="intro">
        <div className="intro__imgs">
            <img src={img1} alt="model1" className="intro__imgs--1" />
            <img src={img2} alt="model1" className="intro__imgs--2" />
        </div>
        <div className="intro__text">
            <h2><span>WE ARE</span> MORE THAN A BUSINESS</h2>
            <p>We are more than a business, we are an en extended family of young, open minded,ambitious and always 
                enthusiastic experts with various background.We 
                are more than a business,we are an en extended 
                family of young, open minded, ambitious and always 
                enthusiastic experts with various background.</p>
            <button>Learn more &rarr;</button>
        </div>
    </div>
);

export default introduction;