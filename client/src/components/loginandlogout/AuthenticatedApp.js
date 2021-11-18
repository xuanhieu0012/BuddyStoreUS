import React, { useState }from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import NavBarForAdmin from '../admin/NavBarForAdmin'
import UpdateProduct from '../admin/UpdateProduct'
import QuestionList from '../admin/QuestionList'
import NavBarForUser from '../user/NavBarForUser'
import ProfileUser from '../user/ProfileUser'
import OrdersUser from '../user/OrderUser'
function AuthenticatedApp({ currentUser, setCurrentUser }) {
  
    console.log(currentUser)
    const handleLogout = () => {
        fetch(`/logout`, {
        method: 'DELETE',
        credentials: 'include'
    })
        .then(res => {
            if (res.ok) {
            setCurrentUser(null)
            
        }
        })
    }
    return (
    <div >
        <h1>Welcome Back, {currentUser.username} </h1>
        <button onClick={handleLogout}>Logout</button>
        {currentUser.addmin ? (<div className="for-admin">
            <div className="Nav-bar-Admin">
                <NavBarForAdmin />
            </div>
            <Route path="/updateProduct" >
                <UpdateProduct />
            </Route>
            <Route path='/question'>
                <QuestionList />
            </Route> 
        </div> )    : (<div className="for-User"> 
            <NavBarForUser />
            <Route path="/orders">
                <OrdersUser />
            </Route>
            <Route path='/profiles'>
                <ProfileUser />
            </Route>
        </div>)}
    </div>
);
}

export default AuthenticatedApp;