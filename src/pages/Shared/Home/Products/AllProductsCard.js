import React from 'react';
import { Link } from 'react-router-dom';

const AllProductsCard = ({ product }) => {
    const { img, name, description } = product;

    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description.slice(0, 100) + "..."}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">
                            <Link>Details</Link>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllProductsCard;