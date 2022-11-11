import React from 'react';
import { Link } from 'react-router-dom';

const AllProductsCard = ({ product }) => {
    const { _id, img, name, description } = product;

    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description.slice(0, 100) + "..."}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/productdeetails/${_id}`}>
                            <button className="btn btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllProductsCard;