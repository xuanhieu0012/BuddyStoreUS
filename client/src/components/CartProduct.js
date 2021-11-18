import React from "react";
import {Link} from "react-router-dom"
function CartProduct({eachProduct, handleRemoveCartList, handleCartData}){
    
   
    const {image_url, name,  price , qty, id}= eachProduct
    
  
    return(
    <div className="cartContainer">
        
        <img  className="imageContainer" src={image_url} alt ={name}></img>
            <div className="CartFlowerName">
                <Link to={`/product/${id}}`}> {name}</Link>
                
            </div>
        
            <div className="cartQuantity">
                Quanity: 
                <button onClick={() =>handleRemoveCartList(eachProduct)} >-</button>
                    {qty}
                <button onClick={() => handleCartData(eachProduct)}>+</button>  
            </div> 
            
            <div className="cartPrice"> 
                <p>${qty * price}</p>
            </div>
        </div>
        

    )
}

export default CartProduct