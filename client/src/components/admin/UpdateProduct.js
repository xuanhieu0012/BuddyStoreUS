import React,{useEffect, useState} from "react";
import ListProduct from './ListProduct'

function UpdateProduct(){
    const [productData, setProductData] = useState(null)
    const [toggleUpdate, setToggleUpdate] = useState(false)
    useEffect(() =>{
        fetch('/products')
        .then(res => res.json())
        .then(data => setProductData(data))
    },[toggleUpdate])
    const listProductDisplay = productData === null? null : productData.map(product => <ListProduct key={product.id} product= {product} setToggleUpdate={setToggleUpdate}/>)
    return <div>
        <div className="Product-List-Header">
            <div className="product-list-image">
                <h2>Picture</h2>
            </div>
            <div className="product-list-name">
                <h2>Name</h2>
            </div>
            <div className='product-list-price-header'>
                    <h2>Price</h2>
            </div>
            <div className="product-list-quantity-header">
                <h2>Quantity</h2>
            </div>
            <div className="">
                <h2>Description</h2>
            </div>
            </div>
        <div className="List-product-container">
            {listProductDisplay}
        </div>
    </div>
}

export default UpdateProduct