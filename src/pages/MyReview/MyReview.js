import React, { useEffect, useState } from 'react';
import useTitle from '../../Hook/useTitle';
import ReviewCard from './ReviewCard';

const MyReview = () => {
    const [reviews, setReviews] = useState([]);
    useTitle("Review");

    useEffect(() => {
        fetch('https://real-tech-server.vercel.app/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div className='flex justify-center items-center  flex-col my-10'>
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