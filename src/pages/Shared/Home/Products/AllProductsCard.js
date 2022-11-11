import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const AllProductsCard = ({ product }) => {
    const { _id, img, name, description } = product;

    return (
        <PhotoProvider>
            <div >
                <div className="card w-96 bg-base-100 shadow-xl">
                    <PhotoView src={img}><img src={img} alt="Shoes" /></PhotoView>
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
        </PhotoProvider>
    );
};

export default AllProductsCard;