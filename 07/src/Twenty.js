import React from 'react'
import { useAuth } from './AuthContext'
function Twenty() {
    const {user, login, logout} = useAuth();
  return (
    <div>
        <h1>User Authenication</h1>
        {
            user ?(
                    <div>
                        <p>Welcome, {user.username} </p>
                        <button onClick={logout}>Logout</button>
                    </div>

            ):(
                <button type='button' onClick={()=>login({username:'user12345'})}>Login</button>
            )
        }
        
    </div>
  )
}

export default Twenty