import React,{ useState, useEffect} from 'react';


function BestProduct(){
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
console.log(id)
console.log(randomProduct)
const displayRandomProduct = randomProduct === undefined ? null : <div className="random-product"> 
                                                                        <div className="random-product-image-container">
                                                                        {imageForRandomProduct}
                                                                        </div>
                                                                        <h2>{randomProduct.name}</h2>
                                                                        {/* <img src={randomProduct.image_url} alt={randomProduct.name}/> */}
                                                                        
                                                                        <p>{randomProduct.description}</p>
                                                                        <p>{randomProduct.quantity === null ? "Out Of Stock" : randomProduct.quantity}</p>
                                                                        <p>{randomProduct.price} </p>

                                                                    </div>

    return <div className="BestProductContainer">
        <h2>Best Selling</h2>
        {displayRandomProduct}
    </div>

}

export default BestProduct;