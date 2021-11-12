import { useState, useEffect } from "react";
import {  Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Account from './components/Account'
import Cart from './components/Cart'
import './App.css'
import About from './components/homepage/About'

import Products from './components/homepage/Products'
import ShippingPolicy from './components/homepage/ShippingPolicy'
import ContactUs from './components/ContactUsPage/ContactUs'
function App() {
  

 

  return (
    <>
      <div className="App">
        
        <Switch>
          
          <Route exact path="/" >
              <Home />
          </Route>
          <Route  path="/account" >
              <Account />
          </Route>
          <Route  path="/cart" >
              <Cart />
          </Route>
          <Route  path="/about">
                <About />
            </Route>
            <Route  path="/products">
                <Products />
            </Route>
            <Route path="/policy">
                <ShippingPolicy />
            </Route>
            <Route path="/contactus">
                <ContactUs />
            </Route>
         
        </Switch>
      </div>
    </>
  );
}

export default App;