import React from 'react';
import './Sponsors.scss';

import sponsor1 from '../../../assets/Footer/sponsor 1.png';
import sponsor2 from '../../../assets/Footer/sponsor 2.png';
import sponsor3 from '../../../assets/Footer/sponsor 3.png';
import sponsor4 from '../../../assets/Footer/sponsor 4.png';
import sponsor5 from '../../../assets/Footer/sponsor 5.png';
import sponsor6 from '../../../assets/Footer/sponsor 6.png';
import sponsor7 from '../../../assets/Footer/sponsor 7.png';
import sponsor8 from '../../../assets/Footer/sponsor 8.png';
import sponsor9 from '../../../assets/Footer/sponsor 9.png';
import sponsor10 from '../../../assets/Footer/sponsor 10.png';

const sponsors = props => {
    const sponsorsArray = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6, sponsor7, sponsor8, sponsor9, sponsor10];
    const Sponsors = sponsorsArray.map((el)=> {
        let id =0;
        id = id++;
        return (
            <img src={el} alt="sponsor logo" key={id} className="sponsor__img" />
        );
    });
    return (
        <div className="sponsor">
            {Sponsors}
        </div>
    );
};

export default sponsors;