import React, { useEffect, useState } from 'react'

function MultipleReturn() {
    const [users,setUsers]=useState([]);
    const [isLoading, setIsLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        async function fetchUsers(params) {
            try {
                const response=await fetch('https://api.github.com/users');
                const data=await response.json();
                setUsers(data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }
        fetchUsers();
    },[])
    if(isLoading){
        return <p>Loading...</p>
    };

    if(error){
        return <p>error:{error.message}</p>
    }
  return (
    <div>
        <h1>Users List</h1>
        <li>
            {users.map(user=>{
                return <li key={user.id}>{user.login}</li>;
            })}
        </li>
    </div>
  )
}

export default MultipleReturn