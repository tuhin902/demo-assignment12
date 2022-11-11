import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://real-tech-server.vercel.app/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className='text-center mb-4'>

                <h2 className='text-5xl font-semibold'>Our Products</h2>

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