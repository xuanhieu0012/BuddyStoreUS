import React,{useEffect, useState} from 'react';
import TopHeader from '../TopHeader'
import NavBar from '../homepage/NavBar'
import DisplayFeature from '../homepage/DisplayFeature';
import { Route } from 'react-router-dom';
import SearchBar from '../../SearchBar'
// import ProductDetails from './ProductDetails'
function Products({handleCartData}){
    const [productData, setProductData] = useState(null)
    const [searchWord, setSearchWord] = useState("")
    useEffect(() =>{
        fetch('/products')
        .then(res => res.json())
        .then(productsArr => setProductData(productsArr))

    },[])
    const filterSearch = productData === null ? null : productData.filter(product => 
   
        product.name.toLowerCase().includes(searchWord.toLowerCase())
    
    )
    const displayProduct =  productData === null ? null :filterSearch.map(eachproduct => <DisplayFeature key={eachproduct.id} product={eachproduct} handleCartData={handleCartData}/>)
    return <div className='product-page-container'>
        <TopHeader />
        <NavBar />
        <h1>Products</h1>
        <div className='search-bar-container'>
            <SearchBar setSearchWord={setSearchWord}/>
        </div>
        
        <div className="all-product-container">
        
            {displayProduct}
        </div>
        
     
    </div>
}


export default Products