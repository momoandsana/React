import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import './components/TripTestStyle.css';
import Hawaii from './assets/images/Hawaii.jpg';

const TripTest = () => {
    return (
        <div>
            <Header title="Trip"/>
            <Nav/>
            <Article title="" body="올 여름 최고의 찬스"/>
            <img src={Hawaii} alt='hawaii' className="imgStyle"/>
        </div>
    );
};

export default TripTest;