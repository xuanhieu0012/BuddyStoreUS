import React,{useEffect, useState} from 'react';
import ImageSliderForFeatureProduct from './ImageSliderForFeatureProduct';

import DisplayFeature from './DisplayFeature';

function FeatureProduct({handleCartData}){
    const [featureProductDisPlay, setFeatureProductDisPlay] = useState(null)
    // const match= useRouteMatch()
    useEffect(() =>{
        fetch('/products')
        .then(res =>res.json())
        .then(productData => setFeatureProductDisPlay(productData))
    },[])
   
    const displayProduct = featureProductDisPlay === null ? null : featureProductDisPlay.slice(0,8).map(product => <DisplayFeature key={product.id} product={product} handleCartData={handleCartData}/>)
    
    
    return<div>
        <h1>Feature Products </h1>
        <div className="feature-product-container">
            
            {displayProduct}
        </div>
     
    </div>
}

export default FeatureProduct;