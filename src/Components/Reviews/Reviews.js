import React from 'react';
import './Reviews.css'
import LoadData from '../hooks/LoadData';
const Reviews = () => {
    const reviews = LoadData();
    return (
        <div>
            <h1>All the reviews</h1>
            {reviews.map(review => <div className='reviews' key={review.id}>
                <img src={review.img} alt="" />
                <div className='text'>
                    <h3 >{review.name}</h3>
                    <p>{review.review}</p>
                    <p>Rating:{review.rating}</p>
                </div>
            </div>)}
        </div>
    );
};

export default Reviews;