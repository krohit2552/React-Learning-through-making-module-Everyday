import React, { useState } from 'react'

function Thirteen() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isRegister, setIsRegister] = useState(false);
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [users, setUsers] = useState([]);

    const handleAuthenication = () => {
        if (isLoggedin) {
            //login
            const user = users.find((u) => u.email === email && u.password === password);
            if (user) {
                setIsLoggedin(true);
            }
            else {
                alert('Login failed.Please check your credential');
            }
        }
        else {
            //register
            const newUser = { email, password };
            setUsers([...users, setUsers]);
            localStorage.setItem('users', JSON.stringify([...users, newUser]));
            setIsLoggedin(true);
        }
    }

    const handleLogout = () => {
        setIsLoggedin(false);
        setEmail('');
        setPassword('');
    }
    return (
        <div>
            {isLoggedin ? (
                <div>
                    <h1>
                        Welcome,{email}!
                    </h1>
                    <button onClick={handleLogout}>
                        Logout
                    </button>
                </div>) : (
                <div>
                    <from>
                        <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                        <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={handleAuthenication}>
                            {isRegister ? "Login" : "Register"}
                        </button>
                    </from><br />
                    <p>{isRegister ? "Don`t have a account? Register Now" : "Already Register? Login now"}</p>
                    <button onClick={() => setIsRegister(!isRegister)}>
                        {isRegister ? "Register" : "Login"}
                    </button>
                </div>)
            }
        </div>
    )
}

export default Thirteen