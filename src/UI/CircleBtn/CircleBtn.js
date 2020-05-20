import React from 'react';
import './CircleBtn.scss';



const circleBtn = props => {
    let caption = props.text;
    let classesBtn = "btn";
    if(props.align === "right"){
        classesBtn =  "btn__right";
    }
    return (
        <div className={classesBtn}>
            <div className={classesBtn+"__body"}>
                <div className={classesBtn+"__body--arrow"}></div>
            </div>
            <div className={classesBtn+"__text"}>{caption}</div>
        </div >
        
    );
};

export default circleBtn;