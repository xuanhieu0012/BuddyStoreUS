import React,{useState} from 'react';
import {AiTwotoneStar} from 'react-icons/ai'
import Modal from './Modal'
function ReviewDetails({review, currentUser, setToggleSubmitReview, productid}){
    const [toggleModal, setToggleModal] =useState(false)
     const [updateReview, setUpdateReview] =useState({
    content_desc: "",
    rating: 0,
    id: review.id


    })
    function handleUpdateReview(e){
        e.preventDefault();
        fetch(`/reviews/${review.id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateReview)})
        setToggleSubmitReview(toggleSubmitReview =>!toggleSubmitReview)
    }

    function handleDeleteReview(){
        fetch(`/reviews/${review.id}`,{
            method: 'DELETE'})
            setToggleSubmitReview(toggleSubmitReview => !toggleSubmitReview)
    }
    function handleEditReview(){
        console.log(review.id)
        setToggleModal(toggleModal => !toggleModal)
    }

    return <div className="each-review-container">
        <div className="user-rating">
            <h2>{review.username === null ? "Annonymous User": review.username}</h2>
            <div>
            {[...Array(review.rating)].map((e, i) => <span className="busterCards" key={i}><AiTwotoneStar size={30}/></span>)}
            </div>
             {/* <p>{review.rating} <AiTwotoneStar /></p> */}
        </div>
        <div className="review-content">
            <p>{review.content_desc}</p>
            
        </div>
        <div className="review-edit-delete-button">
            <div className="Edit-button-container">
                {currentUser === null ? null : (currentUser.username === review.username ? <button onClick={handleEditReview}>Edit</button> : null)}
            </div>
            <div className="Delete-button-container">
                {currentUser === null ? null : (currentUser.username === review.username? <button onClick={handleDeleteReview}>Delete</button> : null)}

            </div>
        

        </div>
        <Modal setToggleModal={setToggleModal} toggleModal={toggleModal} setUpdateReview={setUpdateReview} updateReview={updateReview} handleUpdateReview={handleUpdateReview}/>
    </div>
}

export default ReviewDetails;