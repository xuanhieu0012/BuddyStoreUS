import React,{useState, useEffect}  from 'react';
import AuthenticatedApp from './loginandlogout/AuthenticatedApp'
import UnthenticatedApp from './loginandlogout/UnthenticatedApp'
import { BrowserRouter as Router } from 'react-router-dom'
import TopHeader from './TopHeader'
import NavBar from './homepage/NavBar';
function Account({currentUser, setCurrentUser, authChecked}){
    


    if (!authChecked) {return <div>Not Check</div>}
    return <div>
        <TopHeader />
        <NavBar />
        <Router>
            {currentUser ? (
            [
                <AuthenticatedApp  setCurrentUser={setCurrentUser}
                currentUser={currentUser}/>
            ]
                ): (
            [
                <UnthenticatedApp setCurrentUser={setCurrentUser}/>
            ]
        )}
    </Router>
    </div>
}

export default Account;