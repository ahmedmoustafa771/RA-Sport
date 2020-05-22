import React from 'react';
import './LandingPage.scss';

import CircleBtn from '../../UI/CircleBtn/CircleBtn';

const landingPage = props => {
    return (
            <div className="LP">
                <div className="LP__body">
                    <h1>We are more than<br />a buisness,</h1>
                    <p>We are more than a business, we are an en extended family of young, open minded, ambitious and always enthusiastic experts with various background. </p>
                    <CircleBtn text={"SCROLL DOWN"} align={"left"}/>
                    <CircleBtn text={"MORE BRANDS"} align={"right"} />
                    <h2>Let's shopping by brand</h2>
                    <p>Browse our sites now and buy what you want in a shared basket</p>
                </div>
            </div>
    );
};

export default landingPage;