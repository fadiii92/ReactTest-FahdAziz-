import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

function ViewCompanyUsers() {
    const {user} = useContext(AuthContext)
    const [users, setUsers] = useState([])
    useEffect(()=>{
    setUsers(JSON.parse(localStorage.getItem(user)))
    console.log(users)
    },[]) 
    
    
    
  return (
    <div>
    <br /><br />      <h2>Company Users</h2><br />

      {users.map((curr)=>
        (<div key={Math.random()}>
        <p>Name: {curr.name} </p>
        <p>Email: {curr.email} </p>
        <p>Password: {curr.password} </p><br />
    </div>)
    )}
    </div>
  )
}

export default ViewCompanyUsers
