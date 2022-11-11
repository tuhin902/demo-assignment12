import React, { useEffect, useState } from 'react';

const MyReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div>
            {
                reviews.map(review => console.log(review))
            }

        </div>
    );
};

export default MyReview;