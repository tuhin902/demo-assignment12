import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const MyReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div className='flex justify-center my-10'>
            {
                reviews.map(review => <ReviewCard
                    key={review._id}
                    review={review}
                ></ReviewCard>)
            }

        </div>
    );
};

export default MyReview;