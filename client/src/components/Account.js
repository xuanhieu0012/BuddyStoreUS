import React,{useState, useEffect}  from 'react';
import AuthenticatedApp from './loginandlogout/AuthenticatedApp'
import UnthenticatedApp from './loginandlogout/UnthenticatedApp'
import { BrowserRouter as Router } from 'react-router-dom'
import TopHeader from './TopHeader'
function Account(){
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
    if (!authChecked) {return <div>Not Check</div>}
    return <div>
        <TopHeader />
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