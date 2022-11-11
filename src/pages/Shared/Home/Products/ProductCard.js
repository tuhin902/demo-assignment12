import React from 'react';

const ProductCard = ({ product }) => {
    console.log(product);
    const { img, description, name } = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-semibold">{name}</h2>
                <p className='text-xl text-orange-600'>{description.slice(0, 100) + "..."}</p>
            </div>
        </div>

    );
};

export default ProductCard;