import { useState, useEffect } from "react";
import {  Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Account from './components/Account'
import Cart from './components/Cart'
import './App.css'
import About from './components/homepage/About'
import ProductDetails from './components/ProductPage/ProductDetails'
import Products from './components/ProductPage/Products'
import ShippingPolicy from './components/homepage/ShippingPolicy'
import ContactUs from './components/ContactUsPage/ContactUs'

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cartData') || '[]')
function App() {
  const [cartData, setCartData]= useState(cartFromLocalStorage) //=> storeCart data[]
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)
  useEffect(() =>{
    fetch('/me',{
        credentials: 'include'
    })
    .then(res =>{
        if (res.ok){
            res.json().then(user => {
                setCurrentUser(user)
                setAuthChecked(true)
            })
        }else {
            setAuthChecked(true)
        }
    })
},[])



  useEffect(() =>{
    localStorage.setItem('cartData', JSON.stringify(cartData))
 
  },[cartData])
  function handleCartData(productData){
    const exist = cartData.find(x => x.id === productData.id)
    if (exist){
    setCartData(cartData.map(product => product.id === productData.id ? {...exist, qty: exist.qty + 1} : product))
    
    } else{
      setCartData([...cartData, {...productData, qty: 1}])
    }
}
  function handleRemoveCartList(productData){
    const exist = cartData.find(x => x.id === productData.id)

    if (exist.qty === 1){
      setCartData(cartData.filter(x => x.id !== productData.id ))
      } else{ 
        setCartData(cartData.map(x => x.id === productData.id ? {...exist, qty: exist.qty - 1} : x))
      }
  }

 

  return (
    <>
      <div className="App">
        
        <Switch>
          
          <Route exact path="/" >
              <Home handleCartData={handleCartData}/>
          </Route>
          <Route  path="/account" >
              <Account currentUser={currentUser} setCurrentUser={setCurrentUser} authChecked={authChecked} setAuthChecked={setAuthChecked}/>
          </Route>
          <Route  path="/cart" >
              <Cart cartData={cartData} handleRemoveCartList={handleRemoveCartList} handleCartData={handleCartData} setCartData={setCartData} currentUser={currentUser}/>
          </Route>
          <Route  path="/about">
                <About />
            </Route>
            <Route  path="/products">
                <Products handleCartData={handleCartData}/>
            </Route>
            <Route path="/policy">
                <ShippingPolicy />
            </Route>
            <Route path="/contactus">
                <ContactUs />
            </Route>
            <Route path={`/product/:id`}>
              <ProductDetails handleCartData={handleCartData} authChecked={authChecked} currentUser={currentUser}/>
            </Route>
            
        </Switch>
      </div>
    </>
  );
}

export default App;