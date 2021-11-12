import React,{useEffect, useState} from 'react';
import ImageSliderForFeatureProduct from './ImageSliderForFeatureProduct';
import { Route, useRouteMatch } from 'react-router-dom';
import DisplayFeature from './DisplayFeature';
import ProductDetails from './ProductDetails'
function FeatureProduct(){
    const [featureProductDisPlay, setFeatureProductDisPlay] = useState()
    // const match= useRouteMatch()
    useEffect(() =>{
        fetch('/products')
        .then(res =>res.json())
        .then(productData => setFeatureProductDisPlay(productData))
    },[])

    const displayProduct = featureProductDisPlay === undefined ? null : featureProductDisPlay.map(product => <DisplayFeature product={product}/>)
    
    
    return<div >
        <h1>Feature Products </h1>
        <div className="feature-product-container">
            {displayProduct}
        </div>
     
    </div>
}

export default FeatureProduct;