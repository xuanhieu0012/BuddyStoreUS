import React from "react";
import StarRating from "./StarRating";
function Modal({setUpdateReview, updateReview, toggleModal, handleUpdateReview, }){


    return (toggleModal ? 
    <div className="w3-modal">
            <div className="w3-modal-content">
                <div className="header">
                    <h3> Update Review </h3>
                </div>
                <div className="modal-body">
                    <form  className="form-review" onSubmit={handleUpdateReview}>
                        <StarRating reviewData={updateReview}  setReviewData={setUpdateReview}  /> 
                        <div className="text-and-submit-form">
                            <textarea type="text" placeholder="write a review" value={updateReview.content_desc} onChange={(e) => setUpdateReview({...updateReview, content_desc: e.target.value})}/>
                            <button type="submit">Update</button>
                        </div>
                    </form>
                </div>

            </div>

        </div> 
        : null)
}

export default Modal