import React from "react";
import {Link} from "react-router-dom"
import ImageSliderForFeatureProduct from "./ImageSliderForFeatureProduct";

function DisplayFeature({product}){


    return <div className="each-image-product">
            <ImageSliderForFeatureProduct ImageData={product.image_url} />
            <div className="text-feature">
            
                <Link to={`/products/${product.id}`}>{product.name}</Link>
            </div>
        </div>
    
}


export default DisplayFeature;