import React,{useState} from 'react';
import ModalForUpdateProduct from './ModalForUpdateProduct';

function ListProduct({product, setToggleUpdate}){
    const {name, description, price, quantity, image_url, id} = product;
    const [toggleEdit, setToggleEdit] =useState(false)
    function UpdateProduct(){
        setToggleEdit(toggleEdit => !toggleEdit)
    }
    function deleteProduct(){
        fetch(`/products/${id}`,{
            method: 'DELETE'
        })
        setToggleUpdate(toggleEdit => !toggleEdit)
    }
    return <div className="product-container">
    <div className="each-product-container">
        <div className="product-list-image">
            <img src={image_url === null ? null : image_url[0]} alt={name} />
        </div>
        <div className="product-list-name">
                <h3>{name}</h3>
        </div>
        <div className='product-list-price'>
                <p>$ {price}</p>
        </div>
        <div className="product-list-quantity">
                {quantity === null ? 0 : quantity}
        </div>
        <div className="description-list-container">
                <p>{description.substring(0,200)}</p>
        </div>
        <div className="ListProduct-button-container">
            <button className="btn"onClick={UpdateProduct}>Edit</button>
            <button onClick={deleteProduct}>Delete</button>
        </div>
        </div>
        {toggleEdit === false? null : <ModalForUpdateProduct product={product} setToggleUpdate={setToggleUpdate}/>}
    
    </div> 
}

export default ListProduct;