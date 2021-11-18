import React,{useState} from 'react';


function ModalForUpdateProduct({product, setToggleUpdate}){
console.log(product)
    const [formData, setFormData] = useState({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        description: product.description,
        store_id: product.store_id
    })
    function handleSubmitUpdateForm(e){
        e.preventDefault()
        console.log(formData)
        fetch(`/products/${product.id}`,{
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'},
            body: JSON.stringify(formData)})
            setToggleUpdate(toggleUpdate => !toggleUpdate)
    }
    function handleOnchangeData(e){
        const key = e.target.name
        setFormData({...formData, [key]: e.target.value})
    }
    return <div className="update-product-form">
        <form className="update-product-form" onSubmit={handleSubmitUpdateForm}>
            <div>
                <label>Picture Url:</label>
                <input type="text" name="image_url" placeholder="image url"/>
            </div>
            <div>
                <label>Name:</label>
                <input type="text" name="name" placeholder="name product" value={formData.name}  onChange={handleOnchangeData}/>
            </div>
            <div>
                <label>Price:</label>
                <input type="number" name="price" placeholder="price " value={formData.price} onChange={handleOnchangeData}/>
            </div>
            <div>
                <label>Quantity:</label>
                <input type="number" name="quantity" placeholder="quantity product" value={formData.quantity} onChange={handleOnchangeData}/>
            </div>
            <div className="description-input-container">
                <label>Description:</label>
                <textarea type="text" name="description" placeholder="description product" value={formData.description} onChange={handleOnchangeData}/>
            </div>
            <div className="button-form">
            <button type="submit">Update</button>
            </div>
        </form>
        
        </div>
}

export default ModalForUpdateProduct;