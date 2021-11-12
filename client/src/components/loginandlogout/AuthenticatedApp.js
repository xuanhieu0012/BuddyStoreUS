
import { Switch, Route, Redirect } from 'react-router-dom'
function AuthenticatedApp({ currentUser, setCurrentUser }) {
    
    
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
        Already authenticated
        <button onClick={handleLogout}>Logout</button>
    
    </div>
);
}

export default AuthenticatedApp;