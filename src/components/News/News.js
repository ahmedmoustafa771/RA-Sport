import React, { useEffect, useState } from 'react';
import './News.scss';
import axios from 'axios';

import model1 from '../../assets/News/model 1.png';
import model2 from '../../assets/News/model 2.png';
import model3 from '../../assets/News/model 3.png';
import model4 from '../../assets/News/model 4.png';

const news = props => {
    const models = [model1, model2, model3, model4];
    const [loading, setLoading] = useState(true);
    const [newsArray, setNewsArray] = useState([]);

    useEffect(() => {
            axios.get('https://raya-sports.firebaseio.com/news.json')
            .then(res => {
                setLoading(false);
                let newNewsArray = [];
                for (let key in res.data) {
                    newNewsArray.push(res.data[key]);
                }
                setNewsArray([...newNewsArray]);
            });
    }, []);

    let newsCards = newsArray.map(el => {
        let classState = "";
        if (el.id === 2 || el.id === 3){
            classState = "news__inverse";
        } else {
             classState = "news";
        }
        return (
            <div className={classState} key={el.id + new Date()}>
            <div className={classState + "__model"}>
                <img src={models[el.id - 1]} alt="model"/>
            </div>
            <div className={classState + "__logo"}>
                <h3>{el.title}</h3>
                <p>{el.description}</p>
                <div className={classState + "__logo--links"}>
                    <button>Read More</button>
                </div>
            </div>
        </div>
        );
    });

    if (loading) {
        newsCards = <div>Loading News...</div>; 
    }

    return (
        <React.Fragment>
            <div className="news__container">
                {newsCards}
            </div>
            <button className="news__btn">More News</button>

        </React.Fragment>

    );
};

export default news;