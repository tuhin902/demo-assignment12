import React from 'react';
import useTitle from '../../../Hook/useTitle';
import Branch from '../../Branc/Branch';
import Helpline from '../../Helpline/Helpline';
import Banner from './Banner/Banner';
import Products from './Products/Products';

const Home = () => {
    useTitle("home");
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