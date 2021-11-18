import React from "react";
import {Link} from "react-router-dom"


function DisplayFeature({product, handleCartData}){
  
    const {name, image_url, price,  id, quantity} = product

    return <div className="each-image-product-container">
    <img className="ProductImg" src={image_url} alt={name} />
    <div className="ProductDetails">
        <div className="nameProduct">
            
            <Link to={`/product/${id}`}>{name}</Link>
        </div> 
        <div className="price">
            <h3 >${price} </h3>
        </div>
    </div>
        {/* <p>${price}</p> */}
        {/* <p>Overnight Shipping</p> */}
        <div className="buttonContainer">
            <div className="buttonAdd">
                {quantity === null ? <h3>Currently out of stock </h3>:
                <button onClick={() => handleCartData(product)}>Add To Cart</button>}
            </div>
           
        </div>
</div>
   
    
}


export default DisplayFeature;