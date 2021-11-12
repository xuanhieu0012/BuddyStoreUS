import React from "react";
import {Link} from "react-router-dom"
function NavBar(){

    return <div className="navbar-link">
        <Link exact to="/">Home</Link>
        <Link  to="/products">Products</Link>
        <Link  to="/about">About Us</Link>
        <Link  to="/policy">Shipping Policy</Link>
        <Link  to="/contactus">Contact Us</Link>
        
    </div>
}

export default NavBar