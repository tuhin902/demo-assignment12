import React from 'react';
import Branch from '../../Branc/Branch';
import Helpline from '../../Helpline/Helpline';
import Banner from './Banner/Banner';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Helpline></Helpline>
            <Branch></Branch>
        </div>
    );
};

export default Home;