import React,{useState} from "react";
import StarRating from './StarRating'

function ReviewForm({currentUser, productid, setToggleSubmitReview}){
  
    const [reviewData, setReviewData] =useState({
        content_desc: "",
        rating: 0,
        user_id: currentUser.id,
        product_id: productid,
        username: currentUser.username
    })
console.log(currentUser)
function handleSubmitReview(e){
    e.preventDefault();
    fetch('/reviews', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(reviewData)})
    setToggleSubmitReview(toggleSubmitReview => !toggleSubmitReview)
    setReviewData({
        content_desc: "",
        rating: 0,
        user_id: currentUser.id,
        product_id: productid,
        username: currentUser.username
    })
   
}
    return <div>
        
        <form onSubmit={handleSubmitReview} className="form-review">
            <StarRating   setReviewData={setReviewData} reviewData={reviewData} /> 
            <div className="text-and-submit-form">
                <textarea type="text" placeholder="write a review" value={reviewData.content_desc} onChange={(e) => setReviewData({...reviewData, content_desc: e.target.value})}/>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
}

export default ReviewForm;