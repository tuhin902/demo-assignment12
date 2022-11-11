import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className='text-center mb-4'>
                <p className='text-2xl font-bold text-orange-600'>
                    Services
                </p>
                <h2 className='text-5xl font-semibold'>Our Services Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br />
                    words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
                {
                    products.slice(0, 3).map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <div className='flex justify-center my-10'>
                <button className='btn'><Link to='/allproducts'>See all</Link></button>
            </div>

        </div >

    );
};

export default Products;