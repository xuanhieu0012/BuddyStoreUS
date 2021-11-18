import React,{ useState, useEffect} from 'react';
import ImageSliderForFeatureProduct from './ImageSliderForFeatureProduct'
import {Link} from 'react-router-dom'
function BestProduct({handleCartData}){
    const [randomProduct, setRandomProduct] = useState()
    const id = Math.floor(Math.random() * (10 - 1) + 1)
   
    useEffect(() =>{
        fetch(`/products/${id}`)
        .then(res => res.json())
        .then(productData => {
            setRandomProduct(productData)
            
        })
    },[])
const imageForRandomProduct = randomProduct === undefined ? null : randomProduct.image_url.map(image => <img src={image} alt={randomProduct.name}/>)

const displayRandomProduct = randomProduct === undefined ? null : (<div className="ProductCardDetails">
                                                                    <div>
                                                                        {/* <img className="ProductImgDetails" src={productDetail.image_url} alt={productDetail.name} /> */}
                                                                        <ImageSliderForFeatureProduct ImageData={randomProduct.image_url} />
                                                                    </div>
                                                                    <div className="ProductDetailsTextContainer">
                                                                        <div className="flowerTitle">
                                                                            <h3>{randomProduct.name}</h3>
                                                                        </div>
                                                                            <p id="Price">Price: ${randomProduct.price} Quantity: {randomProduct.quantity === null ? "Out Of Stock": randomProduct.quantity}</p>
                                                                            
                                                                        <div className="description">
                                                                            
                                                                            {`${randomProduct.description.substring(0, 200)}...`}<Link to={`/product/${randomProduct.id}`}>More details</Link>
                                                                        </div>
                                                                        <div className="buttonDetailPage">
                                                                        {randomProduct.quantity === null ? <h3>Currently out of stock </h3> :<button onClick={()=> handleCartData(randomProduct)}>Add To Cart</button>}
                                                                            
                                                                        </div>
                                                                    </div>
                                                                    </div>)

    return <div className="BestProductContainer">
        <h1>Best Selling</h1>
        {displayRandomProduct}
    </div>

}

export default BestProduct;