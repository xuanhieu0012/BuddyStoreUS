import React,{useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import TopHeader from '../TopHeader';
import NavBar from '../homepage/NavBar';
import ImageSliderForFeatureProduct from '../homepage/ImageSliderForFeatureProduct'
import ReviewForm from './ReviewForm';
import ReviewDetails from './ReviewDetail';
function ProductDetails({handleCartData, authChecked, currentUser}){
const {id} = useParams();
const [productDetail, setProductDetail] = useState(null);
const [toggleSubmitReview, setToggleSubmitReview] = useState(false);
let loginLink = <Link to='/account'>Login</Link>
useEffect(() =>{
    fetch(`/products/${id}`)
    .then(res =>res.json())
    .then(product => setProductDetail(product))
},[toggleSubmitReview])
console.log(productDetail)
const displayProductDetails = productDetail === null ? null :   (<div className="ProductCardDetails">
                                                                        <div >
                                                                            {/* <img className="ProductImgDetails" src={productDetail.image_url} alt={productDetail.name} /> */}
                                                                            <ImageSliderForFeatureProduct ImageData={productDetail.image_url} />
                                                                        </div>
                                                                        <div className="ProductDetailsTextContainer">
                                                                            <div className="flowerTitle">
                                                                                <h3>{productDetail.name}</h3>
                                                                            </div>
                                                                                <p id="Price">Price: ${productDetail.price} Quantity: {productDetail.quantity === null ? "Out Of Stock": productDetail.quantity}</p>
                                                                                
                                                                            <div className="description">
                                                                                <p>{productDetail.description}</p>
                                                                            </div>
                                                                            <div className="buttonDetailPage">
                                                                                {productDetail.quantity === null ? <h3>Currently out of stock </h3>:
                                                                                <button onClick={()=> handleCartData(productDetail)}>Add To Cart</button>}
                                                                                
                                                                            </div>
                                                                        </div>
                                                                </div>)
const displayProductReview =  productDetail === null ? null : productDetail.reviews.length === 0 ? <h2>This product has not been reviewed yet </h2>: productDetail.reviews.map(review => <ReviewDetails review={review} currentUser={currentUser} setToggleSubmitReview={setToggleSubmitReview} productid={id}/>)
                    




                                                                                                                                            
    return <div>
        <TopHeader />
        <NavBar />
        <div className="product-detail-container">
            {displayProductDetails}
        </div>
            <h1>Product Reviews </h1>
        <div className="product-review-container">
            <div className="review-form-container">
                {currentUser ? <ReviewForm currentUser={currentUser} productid={id} setToggleSubmitReview={setToggleSubmitReview} /> : <div>You need to {loginLink} to write the review </div>}
            </div>
            <div className="review-container">
                {displayProductReview }
            </div>
            
        </div>
    </div>
}


export default ProductDetails