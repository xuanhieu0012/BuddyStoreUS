import React,{useState} from 'react';

function AddProduct(){
    const [productForm, setProductForm] = useState({
        name: "",
        price: "",
        quantity: "",
        description: "",
        image_url:  [] ,
        store_id: 1
    })
    function handleProductOnChange(e){
        const key = e.target.name
        if (key === "image_url"){
            setProductForm({...productForm, [key] : [e.target.value]})
        }else{
            setProductForm({...productForm, [key]: e.target.value})
        }
    }
    function handleProductSubmit(e){
        e.preventDefault()
        console.log(productForm)
        fetch((`/products`),{
            method:  'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productForm)
        })
        setProductForm({
            name: "",
            price: "",
            quantity: "",
            description: "",
            image_url:  [] ,
            store_id: 1
        })
    }
    return <div className="profile-form-data">
        <h1> Add New Product </h1>
        <form onSubmit={handleProductSubmit} className="form-detail-container">
            <div>
                <label>Product Name</label>
                <input type="text" name="name" value={productForm.name} onChange={handleProductOnChange}></input>
            </div>
            <div>
                <label>Price</label>
                <input type="number" name="price" value={productForm.price} onChange={handleProductOnChange}></input>
            </div>
            <div>
                <label>Quantity</label>
                <input type="number" name="quantity" value={productForm.quantity} onChange={handleProductOnChange}></input>
            </div>
            <div>
                <label>Image</label>
                <input type="text" name="image_url"value={productForm.image_url} onChange={handleProductOnChange}></input>
            </div>
            <div>
                <label>Description</label>
                <input type="text" name="description" value={productForm.description} onChange={handleProductOnChange}></input>
            </div>
            <div>
                <button type="submit">Add New Product</button>
                
            </div>
        </form>
        
    </div>


}


export default AddProduct