import React from 'react';

const ReviewCard = ({ review }) => {

    const { customer, productName, rating } = review;
    // console.log(review)

    return (
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body">
                <h2 className="card-title">Name:{customer}</h2>
                <p>Product:{productName}</p>
                <p>Rating:{rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-ghost">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;