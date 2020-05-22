import React from 'react';

import Toolbar from '../../components/Toolbar/Toolbar';
import LandingPage from '../../components/LandingPage/LandingPage';
import Brands from '../../components/Brands/BrandCard';
import Introduction from '../../components/Introduction/Introduction';
import Location from '../../components/Location/Location';
import Products from '../../components/Products/Products';
import HowItWorks from '../../components/HowItWork/HowItWork';
import News from '../../components/News/News';
import Footer from '../../components/Footer/Footer';

const homePage = props => {

    return (
        <React.Fragment>
            <Toolbar />
            <LandingPage />
            <Brands />
            <Introduction />
            <Location />
            <Products />
            <HowItWorks />
            <News />
            <Footer />
        </React.Fragment>
    );
};

export default homePage;