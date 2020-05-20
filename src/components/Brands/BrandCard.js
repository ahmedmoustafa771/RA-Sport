import React, { useState, useEffect } from 'react';
import './BrandCard.scss';
import axios from 'axios';

import model1 from '../../assets/Brands/Model 1.png';
import model2 from '../../assets/Brands/Model 2.png';
import model3 from '../../assets/Brands/Model 3.png';
import model4 from '../../assets/Brands/Model 4.png';

import logo1 from '../../assets/Brands/Logo 1.png';
import logo2 from '../../assets/Brands/Logo 2.png';
import logo3 from '../../assets/Brands/Logo 3.png';
import logo4 from '../../assets/Brands/Logo 4.png';

const brandCard = props => {
    const models = [model1, model2, model3, model4];
    const logos = [logo1, logo2, logo3, logo4];
    const [loading, setLoading] = useState(true);
    const [brandArray, setBrandArray] = useState([]);

    useEffect(() => {
            axios.get('https://raya-sports.firebaseio.com/brands.json')
            .then(res => {
                setLoading(false);
                let newBrandArray = [];
                for (let key in res.data) {
                    newBrandArray.push(res.data[key]);
                }
               setBrandArray([...newBrandArray]);
            });
    }, []);

    let brandCards = brandArray.map(el => {
        let classState = "";
        console.log(el.id);
        if (el.id === 2 || el.id === 3){
            classState = "cards__inverse";
        } else {
             classState = "cards";
        }
        return (
            <div className={classState} key={el.name}>
            <div className={classState + "__model"}>
                <img src={models[el.id - 1]} alt="model"/>
            </div>
            <div className={classState + "__logo"}>
                <img src={logos[el.id - 1]} alt="logo"/>
                <p>{el.description}</p>
                <div className={classState + "__logo--links"}>
                    <button>Let's Shopping</button>
                    <a href="/">our story</a>
                </div>
            </div>
        </div>
        );
    });

    if (loading) {
        brandCards = <div>Loading...</div>; 
    }

    return (
        <div className="cards__container">
            {brandCards}
        </div>
    );
};

export default brandCard;