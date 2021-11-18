import React from "react";
import {Link} from "react-router-dom"

function NavBarForUser(){

    return <div className="navbar-admin">
    
    <Link  to="/orders">Orders</Link>
    
    <Link  to="/profiles">Profiles</Link>
   
    
</div>
}


export default NavBarForUser