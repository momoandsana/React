import React from 'react';
import './ButtonStyle.css';

const Button = ({text="없음",img}) => {
    return (
        <div className='divBtn'>
            <img src={img} alt=''/>
            <button>{text}</button>
        </div>
    );
};

export default Button;