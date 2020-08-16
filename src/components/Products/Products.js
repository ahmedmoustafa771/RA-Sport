import React, { useState, useEffect } from 'react';
import './Products.scss';

import CircleBtn from '../../UI/CircleBtn/CircleBtn';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';

import model1 from '../../assets/Products/model 1.png';
import model2 from '../../assets/Products/model 2.png';
import model3 from '../../assets/Products/model 3.png';
import model4 from '../../assets/Products/model 4.png';
import model5 from '../../assets/Products/model 1.png';
import model6 from '../../assets/Products/model 2.png';

import logo1 from '../../assets/Products/logo 1.png';
import logo2 from '../../assets/Products/logo 2.png';
import logo3 from '../../assets/Products/logo 3.png';
import logo4 from '../../assets/Products/logo 1.png';
import logo5 from '../../assets/Products/logo 2.png';
import logo6 from '../../assets/Products/logo 3.png';


const products = props => {
    const slideImages = [model1, model2, model3, model4, model5, model6];
    const slideLogos = [logo1, logo2, logo3, logo4, logo5, logo6];
    const [loading, setLoading] = useState(true);
    const [productArray, setProductArray] = useState([]);

    useEffect(() => {
        axios.get('https://raya-sports.firebaseio.com/products.json')
        .then(res => {
            setLoading(false);
            let newProductArray = [];
            for (let key in res.data) {
                newProductArray.push(res.data[key]);
            }
           setProductArray([...newProductArray]);
        });
    }, []);

    let productSlide = productArray.map(el => {
        return (
            <div key={el.price + el.id}>
                <img src={slideImages[el.id - 1]} alt="model" className="products__slide--img" />
                <img src={slideLogos[el.id - 1]} alt="logo" className="products__slide--logo" />
                <div className="products__slide--foot">
                    <h3>{el.name} </h3>
                    <h4>{el.category} </h4>
                    <h5>&#36;{el.price}</h5>
                </div>
            </div>
        );
    });

    if (loading) {
        productSlide = <div>Loading Products...</div>; 
    }

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <div className="products">
            <div className="products__header"> 
                <div className="products__header--text">
                    <h2>best seller products</h2>
                    <p>Browse our sites now and buy what you want in a shared basket</p>
                </div>
                <CircleBtn align="right" text="More Products"  />
            </div>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                keyBoardControl={true}
                containerClass="products__slide"
                dotListClass="custom-dot-list-style"
                itemClass="products__slide--div"
                centerMode={true}
            >
                {productSlide}
            </Carousel>;
        </div>
    );  
};

export default products;
