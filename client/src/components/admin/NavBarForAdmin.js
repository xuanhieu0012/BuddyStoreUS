import React from "react";
import {Link} from "react-router-dom"

function NavBarForAdmin({setToggleUpdate}){

    return <div className="navbar-admin">
    
    <Link  to="/updateProduct">Update Product</Link>
    <Link  to="/question">Message from Customer</Link>
    <Link  to="/orderslist">Order List</Link>
    <Link to="/addProduct">Add New Product</Link>
   
    
</div>
}


export default NavBarForAdmin