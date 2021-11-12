import React from 'react';
import {Link} from 'react-router-dom'
import logo2 from '../asset/logo2.png'
import SearchBar from '../SearchBar'
function TopHeader(){

    return (
    <div className="link-container">
        <div className="logo">
            <Link to="/"><img className="logo-image" src={logo2} alt="logo" /></Link>
        </div>
        <div>
            <SearchBar />
        </div>

        <div className="cart-and-login-link">
            <Link to="/cart">Cart</Link>
            <Link to="/account">Account</Link>
        </div>
    </div>
    )}

export default TopHeader;