import React, { useState } from "react";
import {AiTwotoneStar} from 'react-icons/ai'
const StarRating = ({reviewData, setReviewData}) => {
    const [starRating, setRating] = useState(0);
    
    const [hover, setHover] = useState(0);
    return (
        <div className="star-rating">
        {[...Array(5)].map((star, index) => {
            index += 1;
            return (
            <button
                type="button"
                key={index}
                className={index <= (hover || starRating) ? "on" : "off"}
                onClick={() => {
                    setReviewData({...reviewData, rating: index})
                    setRating(index)}}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(starRating)}
            >
                <span className="star" ><AiTwotoneStar size={30}/></span>
            </button>
            );
        })}
        </div>
    );
    };


export default StarRating;
