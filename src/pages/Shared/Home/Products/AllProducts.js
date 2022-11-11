import React, { useEffect, useState } from 'react';
import AllProductsCard from './AllProductsCard';

const AllProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://real-tech-server.vercel.app/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20'>
            {
                products.map(product => <AllProductsCard
                    key={product._id}
                    product={product}
                ></AllProductsCard>)
            }

        </div>
    );
};

export default AllProducts;