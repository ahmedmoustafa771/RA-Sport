import React from 'react';

import Toolbar from '../../components/Toolbar/Toolbar';
import LandingPage from '../../components/LandingPage/LandingPage';
import Brands from '../../components/Brands/BrandCard';

const homePage = props => {

    return (
        <React.Fragment>
            <Toolbar />
            <LandingPage />
            <Brands />
        </React.Fragment>
    );
};

export default homePage;