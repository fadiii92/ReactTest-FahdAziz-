import React, { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'

function AuthProvider({children}) {
    const [user,setUser] = useState(localStorage.getItem('currUser'))
    const login = (user) =>{setUser(user)}
    const logout = (user) =>{setUser(null)}

    useEffect(()=>{
        localStorage.setItem('currUser', user)
    },[user])
  return (
    <div>
        <AuthContext.Provider value = {{user, login, logout}}>

            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider

export const AuthContext = createContext()
